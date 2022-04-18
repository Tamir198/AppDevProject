import data from './db.js'

import templateA from "/templates/templateA.js";
import templateB from "/templates/templateB.js";
import templateC from "/templates/templateC.js";

$(document).ready(() => {
  $("#ads__container").append(templateA("DAnielleee"));
  $("#ads__container").append(templateB("DAnelin"));
  $("#ads__container").append(templateC("asdfasdasd"));
});