var config = require('../../../../config'),
    MongoClient = require('mongodb').MongoClient,
    College = require('../../../models/College');

module.exports = function(req, res) {
    College.find({}, function(err, data) {
        if (err) throw err;
        console.log(data[0].college);

        res.render('listColleges', {
            title: 'All Colleges',
            colleges: data[0].college
        });
    })
};
