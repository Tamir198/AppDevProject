import data from './db.js'
import dateUtils from "/utils/dates.js"

$(document).ready(() => {

  var date = new Date();
   data.forEach(ad => {
    ad.timesToShow.forEach(timeToShow => {
      var fromDate = new Date(timeToShow.fromDate);
      var toDate = new Date(timeToShow.toDate);

      if (dateUtils.isBetweenDates(date, fromDate, toDate)) {
        if (dateUtils.shouldShowAdNow(date, timeToShow.days)) {
          console.log(ad);
          
          $("#ads__container").load(ad.templateUrl, ()=>{
            $('h1').replaceWith(`<h1>${ad.name}</h1>`);
            $("#ads__container").append(`<p>${ad.texts}</p>`);
            
            ad.imagesUrl.forEach(item => {
              $("#ads__container").append(`<img src="${item}" height: 100px; width="200px" alt="Image not found" />`);
            })
          });
        }
      }
    })
  });
});