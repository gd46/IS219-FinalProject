var csv = require('csv'),
    fs = require('fs'),
    db = require('../../models/College'),
    MongoClient = require('mongodb').MongoClient,
    config = require('../../../config');

var csvData = [];
var parser = csv.parse(function(err2, data) {
    if (err2) throw err2;
    //console.log(data);
    csvData = data;

    MongoClient.connect(config.database, function(err, db) {
        if (err) throw err;

        var collection = db.collection('college_data');
        collection.insert(csvData, function(error, docs) {
            if (error) throw error;
            console.log(docs);
        });
    });
});

fs.createReadStream('../../../data.csv').pipe(parser);
