const express = require('express');
const app = express();
const port = 3000;
const sendPage = require('./util');
const fs = require('fs/promises');



app.get('/', async function(req, res) {
  const data = await sendPage(req.path);
  res.send(data);
});

app.get('/about', async function(req, res) {
  const data = await sendPage(req.path);
  res.send(data);
});

app.get('/contact-me', async function(req, res) {
  const data = await sendPage(req.path);
  res.send(data);
});

app.use(async function(req,res){
  const errorfile = await fs.readFile('404.html', 'utf8');
  res.status(404).send(errorfile);
});

app.listen(port, function() {
  console.log(`App listening on port ${port}`)
});
