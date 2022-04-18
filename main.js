import data from './db.js'
import dateUtils from "/utils/dates.js"

import templateA from "/templates/templateA.js";
import templateB from "/templates/templateB.js";
import templateC from "/templates/templateC.js";

$(document).ready(() => {
  var date = new Date();
  data.forEach(ad => {
    
    ad.timesToShow.forEach(timeToShow => {
      var fromDate = new Date(timeToShow.fromDate);
      var toDate = new Date(timeToShow.toDate);

      if(dateUtils.isBetweenDates(date,fromDate,toDate)){
        if(dateUtils.shouldShowAdNow(date,timeToShow.days)){
          //TODO - show add here according to template
          console.log(ad);
        }
      }
  
    
    })
  });
  // $("#ads__container").append(templateA("DAnielleee"));
  // $("#ads__container").append(templateB("DAnelin"));
  // $("#ads__container").append(templateC("asdfasdasd"));
});