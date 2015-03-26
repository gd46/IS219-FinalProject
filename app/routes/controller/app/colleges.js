var College = require('../../../models/College');

module.exports = function(req, res) {
    College.find({}, function(err, data) {
        if(err) throw err;
        res.render('listColleges', {
        	colleges: data
        })
    });
};
