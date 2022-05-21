const express = require('express');
const app = express();

const data = require('./db.js');
const dateUtils = require('./utils/dates.js');

app.get('/screen=:number', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  console.log("You song not too well")

  const adsToShow = [];

  // const showAd = (ad) => {
  //   $("#ads__container").load(ad.templateUrl, () => {
  //     $('h1').replaceWith(`<h1>${ad.name}</h1>`);
  //     $("#ads__container").append(`<p>${ad.texts}</p>`);

  //     ad.imagesUrl.forEach(item => {
  //       $("#ads__container").append(`<img src="${item}" height: 100px; width="200px" alt="Image not found" />`);
  //     })
  //   });
  // }

  const date = new Date();
  data.forEach(ad => {
    if (ad.screens.indexOf(req.params.number) >= 0) {

      ad.timesToShow.forEach(timeToShow => {
        const fromDate = new Date(timeToShow.fromDate);
        const toDate = new Date(timeToShow.toDate);
        
        if (dateUtils.isBetweenDates(date, fromDate, toDate)) {
          if (dateUtils.shouldShowAdNow(date, timeToShow.days)) {
            //TODO check why this is never being called
            adsToShow.push(ad);
          }
        }
      })

    }
  });

  res.send(adsToShow);

  if(adsToShow.length == 0){
    res.send("Hey");
  }

  res.send("Gavi");

  // let adToShowIndex = 0;
  // setInterval(() => {
  //   showAd(adsToShow[adToShowIndex]);
  //   if (adToShowIndex == adsToShow.length-1) {
  //     adToShowIndex = 0;
  //   } else {
  //     adToShowIndex++;
  //   }
  // }, adsToShow[adToShowIndex].timeDuration*1000);




  
})



app.listen(8080, () => {
  console.log(`Listening on port 8080`);
})