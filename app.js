const express = require('express');
const app = express();
const instagramGetUrl = require("instagram-url-direct");

const hostname = "0.0.0.0"


app.get('/download', async (req, res) => {
  const url = req.query.url;
  const post = await instagramGetUrl(url);
  console.log(post);
  res.send(post);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
