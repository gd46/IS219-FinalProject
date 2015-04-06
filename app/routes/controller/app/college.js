var config = require('../../../../config'),
    MongoClient = require('mongodb').MongoClient,
    College = require('../../../models/College');

module.exports = function(req, res) {
    College.findOne({}, {
        'college': {
            $elemMatch: {
                "UNITID": parseInt(req.params.id)
            }
        }
    }, function(err, data) {
        if (err) throw err;
        if (data) {
            res.render('collegeDetail', {
                title: data.college[0].INSTNM,
                details: data.college[0]
            });
        }
    });
};
