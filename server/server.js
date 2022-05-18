const express = require('express');
const app = express();

app.get('/screen/:number', (req,res) => {
  res.send(req.params.number);
})

app.listen(8080, () => {
    console.log(`Listening on port 8080`);
})