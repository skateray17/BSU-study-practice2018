const express = require('express');
const bodyParser = require('body-parser');
const accountRoutes = require('./server/routes/account-routes');
const expressSession = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(expressSession);
const path = require('path');
const postsRoutes = require('./server/routes/posts-routes');

const app = express();

const dbName = 'UgagramDB';
const connectionString = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(connectionString);

app.use(expressSession({
  secret: 'AXCJRGSBJUHFOS-AVDAV-4FDfd',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    url: `${connectionString}-app`,
    ttl: 20 * 24 * 60 * 60 // = 20 days.
  })
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => { res.sendFile(path.resolve('public/UI/index.html')); });

app.get('/public/:params*', (req, res) => res.sendFile(path.resolve(__dirname + req.url)));

app.use('/api', [accountRoutes, postsRoutes]);

const server = app.listen(3000, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
