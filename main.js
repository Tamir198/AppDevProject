import data from './db.js'
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

$(document).ready(() => {
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
  });

  let adToShowIndex = 0;
  setInterval(() => {
    showAd(adsToShow[adToShowIndex]);
    if (adToShowIndex == adsToShow.length-1) {
      adToShowIndex = 0;
    } else {
      adToShowIndex++;
    }
  }, 1500);

});

