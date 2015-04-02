//Converter Class 
var Converter = require("csvtojson").core.Converter,
    fs = require("fs"),
    config = require('../../../../config'),
    College = require('../../../models/College');

module.exports = function(req, res) {
    var fileStream = fs.createReadStream(req.files.csvFile.path);
    //new converter instance 
    var csvConverter = new Converter({
        constructResult: true
    });

    //end_parsed will be emitted once parsing finished 
    csvConverter.on("end_parsed", function(jsonObj) {
        console.log(jsonObj);

        var college = new College({
            college: jsonObj
        });

        college.save(function(err, data) {
            if (err) console.log(err);
            res.send('File successfully uploaded');
        });
    });

    //read from file 
    fileStream.pipe(csvConverter);
};
