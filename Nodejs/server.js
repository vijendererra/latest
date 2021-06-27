var express = require('express');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var config = require('./config');
var myReq = require("./error/reqLogger");
const { Cookie } = require('express-session');

var port = process.env.PORT || config.serverport;


mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
},
    (err) => {
        if (!err) {
            console.log("Db connected..")
        }
        else {
            console.log("connection error1:", err);
        }
        var Roter = require('./router/router');
        app.use('/', router);
        app.use(express.static(__dirname + '/uploads'));


       

        // app.use((req,res,next)=>{
        //     console.log("welcome")
        // })

        // app.get('/x*',(req,res)=>{
        //     res.send('x*');
        // })
        // app.get('/xyz',(req,res)=>{
        //     res.send('xyz');
        // })
        // app.get('/xyz*',(req,res,next)=>{
        //     res.send('xyz*');
        //     next();
        // })
        // app.get('/xyz',(req,res)=>{
        //     res.send('xyz2');
        // })

        // router.use(function(req,res,next){
        //     // console.log("welcome")
        //     res.send('hi');
        // })
        // router.get('ab',function(req,res){
        //     // console.log("welcome")
        //     res.send('hi2');
        // })

        // app.use('/d',(req,res,next)=>{
        //     console.log("welcome1")
        // })
        // app.use('/',(req,res)=>{
        //     // console.log("welcome1")
        //     res.send('ff');
        // },
        // function(req,res){
        //     res.send("hello")
        // })
        app.use(myReq);

        app.use(bodyParser.json());
        app.use(cookieParser());
        app.use(session({
            resave:false,
            saveUninitialized:false,
            secret:"key",
            // cookie:{
            //     expires:90000
            // }
        }))

        app.use(cors({ origin: 'http://localhost:4200' }));
        // app.use(function (req, res, next) {
        //     res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        //     next();
        // });
        // app.use(express.static(path.join(__dirname + '/public')));
        // app.get('*', (req, res) => {
        //     res.sendFile(path.join(__dirname + '/public/index.html'))
        // })

        app.use(Roter);
        app.listen(port, () => {
            console.log("app listen :", port);
        });
    });