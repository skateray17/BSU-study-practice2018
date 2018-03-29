const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => { res.sendFile(path.resolve('public/UI/index.html')); });

app.get('/public/:params*', (req, res) => res.sendFile(path.resolve(__dirname + req.url)));

const server = app.listen(3000, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
