import data from './db.js'


$(document).ready(() => {
  //TODO chaned relevant view on main html and show only the wanted adds
  $("#adds__container").html("<div><button>Tamir</button> <button>Daniellle</button></div>");
 
  console.table(data);
});