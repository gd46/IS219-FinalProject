//Converter Class 
var Converter = require("csvtojson").core.Converter,
    fs = require("fs"),
    async = require('async'),
    Tuition = require('../../../models/Tuition');

module.exports = function(req, res) {
    console.log(req.files);
    var fileStream = fs.createReadStream(req.files.csvFile.path);

    //new converter instance 
    var csvConverter = new Converter({
        constructResult: true
    });

    //end_parsed will be emitted once parsing finished 
    csvConverter.on("end_parsed", function(jsonObj) {
        var tuition = new Tuition({
            tuition: jsonObj
        });

        tuition.save(function(err, data) {
            if (err) console.log(err);
            res.send('File successfully uploaded');
        });
    });

    //read from file 
    fileStream.pipe(csvConverter);
};
