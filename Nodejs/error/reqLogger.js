var fs = require('fs');
var Reqlogger = function ( req, res, next) {
    var logMeassage=""+ new Date()+""+req.method +""+req.url+"\n";
    fs.appendFile('error.txt', logMeassage, function (err) {
        if (err) {
            return next(err);
        }
    })
    next();

}
module.exports = Reqlogger;