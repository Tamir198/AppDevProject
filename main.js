import data from './db.js'

import templateA from "/templates/templateA.js";
import templateB from "/templates/templateB.js";
import templateC from "/templates/templateC.js";

$(document).ready(() => {
  $("#adds__container").append(templateA("Test"));
  $("#adds__container").append(templateB("Test"));
  $("#adds__container").append(templateC("Test"));
});