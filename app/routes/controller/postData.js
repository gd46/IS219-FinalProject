var csv = require('csv'),
    fs = require('fs'),
    College = require('./../../models/College'),
    config = require('../../../config');

var parser = csv.parse(function(err, data) {
    if (err) throw err;
    csvData = data;
});

parser.on('end', function() {
    console.log('End PARSING');
    var college = new College({
        college: csvData
    });
    college.save();
});

var stream = fs.createReadStream('../../../data.csv');
stream.pipe(parser);

stream.on('end', function() {
    console.log('DONE');
});
