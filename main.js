import dateUtils from "/utils/dates.js"

const adsToShow = [];

const showAd = (ad) => {
  $("#ads__container").load(ad.templateUrl, () => {
    $('h1').replaceWith(`<h1>${ad.name}</h1>`);
    $("#ads__container").append(`<p>${ad.texts}</p>`);

    ad.imagesUrl.forEach(item => {
      $("#ads__container").append(`<img src="${item}" height: 100px; width="200px" alt="Image not found" />`);
    })
  });
}

const filterAds = (data) => {
  const resArr = [1, 2, 3];
  const date = new Date();
  data.forEach(ad => {
    ad.timesToShow.forEach(timeToShow => {
      const fromDate = new Date(timeToShow.fromDate);
      const toDate = new Date(timeToShow.toDate);

      if (dateUtils.isBetweenDates(date, fromDate, toDate)) {
        if (dateUtils.shouldShowAdNow(date, timeToShow.days)) {
          resArr.push(ad);
        }
      }
    })
  });
  console.log(resArr);
  return resArr;
}

$(document).ready(() => {
  //Call the server http bla bla bla
  //Get array of adds to show on that screen 
  //Pass array to the logic bellow

  const adsToShow = [];
  fetch('http://localhost:8080/screen=2') 
    .then(response => response.json())
    .then(data => {
      const adsToShow = [];
      const date = new Date();
      data.forEach(ad => {
        ad.timesToShow.forEach(timeToShow => {
          const fromDate = new Date(timeToShow.fromDate);
          const toDate = new Date(timeToShow.toDate);

          if (dateUtils.isBetweenDates(date, fromDate, toDate)) {
            if (dateUtils.shouldShowAdNow(date, timeToShow.days)) {
              adsToShow.push(ad);
            }
          }
        })
        console.log(adsToShow)

        let adToShowIndex = 0;
        if (adsToShow.length > 0) {

          setInterval(() => {
            showAd(adsToShow[adToShowIndex]);
            if (adToShowIndex == adsToShow.length - 1) {
              adToShowIndex = 0;
            } else {
              adToShowIndex++;
            }
          }, adsToShow[adToShowIndex].timeDuration * 1000);
        }

      });

    });
});

