const express = require('express');
const app = express();
const cors = require('cors')
const data = require('./db.js');

app.use(cors());

app.get('/screen=:number', (req, res) => {
  let ads = [];
  const screen = +req.params.number;
  data.forEach(ad => {

    if (ad.screens.indexOf(screen) >= 0) {
      ads.push(ad)
    };
  })
  res.send(ads);
})

app.listen(8080, () => {
  console.log(`Listening on port 8080`);
})