var express = require('express');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var config = require('./config');
var myReq = require("./error/reqLogger");

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
  var Roter = require('./router/router');
  app.use('/', router);
  app.use(express.static(__dirname + '/uploads'));

  app.use(myReq);
  app.use(bodyParser.json());
  app.use(cors({ origin: 'http://localhost:4200' }));
  // app.use(express.static(path.join(__dirname + '/public')));
  app.use(Roter);
  app.listen(port, () => {
    console.log("app listen :", port);
  });
});




