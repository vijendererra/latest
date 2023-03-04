var express = require('express');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var config = require('./config');
var Roter = require('./router/router');

var reqLogger=require('./error/reqLogger');
var errLogger=require('./error/ErrorLogger')

var port = process.env.PORT || config.serverport;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}
mongoose.connect(config.database, connectionParams, (err) => {
  if (!err) {
    console.log("Db connected..")
  }
  else {
    console.log("connection error1:", err);
  }
  // app.use(reqLogger);
  // app.use('/', router);
  app.use(express.static(__dirname + '/uploads'));

  app.use(bodyParser.json());
  app.use(cors());
  // app.use(express.static(path.join(__dirname + '/public')));
  app.use('/',Roter);
  app.use(errLogger);
  app.listen(port, () => {
    console.log("app listen :", port);
  });
});




