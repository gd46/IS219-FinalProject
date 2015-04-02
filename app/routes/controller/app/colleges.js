var config = require('../../../../config'),
    MongoClient = require('mongodb').MongoClient,
    College = require('../../../models/College');

module.exports = function(req, res) {
    College.find({}, function(err, data) {
        if (err) throw err;
        if (data) {
            res.render('listColleges', {
                title: 'All Colleges',
                colleges: data[0].college
            });
        } else {
            res.render('uploadFile', {
                title: 'File Upload Page',
            });
        }
    });
};
