var fs = require('fs');
var logger = function (err, req, res, next) {
    if (err) {
        fs.appendFile('error.txt', err.stack + '\n' ,function (err) {
            if (err) {
                console.log("looging error failed")
            }
        })
        res.status(500).json({ "Message": err.Message });
    }
    next();

}
module.exports = logger;