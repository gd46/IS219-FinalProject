//Converter Class 
var Converter = require("csvtojson").core.Converter,
    fs = require("fs"),
    Enrollment = require('../../../models/Enrollment');

module.exports = function(req, res) {
    var fileStream = fs.createReadStream(req.files.csvFile.path);
    //new converter instance 
    var csvConverter = new Converter({
        constructResult: true
    });

    //end_parsed will be emitted once parsing finished 
    csvConverter.on("end_parsed", function(jsonObj) {
        console.log(jsonObj);

        var enrollment = new Enrollment({
            enrollment: jsonObj
        });

        enrollment.save(function(err, data) {
            if (err) console.log(err);
            res.send('File successfully uploaded');
        });
    });

    //read from file 
    fileStream.pipe(csvConverter);
};
