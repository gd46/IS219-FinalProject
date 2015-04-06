var config = require('../../../../config'),
    MongoClient = require('mongodb').MongoClient,
    College = require('../../../models/College');

module.exports = function(req, res) {
    College.find({}, function(err, data) {
        if (err) throw err;
        if (data.length > 0) {
            res.render('collegeDetail', {
                //title: data[0].INSTNM,
                //details: data[0].college
                //colleges: data[0].college
            });
        } 
    });
};
