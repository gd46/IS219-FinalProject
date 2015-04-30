var College = require('../../../models/College');

exports.q1 = function(req, res) {
    res.render('q1');
};

exports.q2 = function(req, res) {
    College.find({}, function(err, data) {
        if (err) throw err;
        if (data.length > 0) {
            res.render('listColleges', {
                title: 'All Colleges',
                url: '/q2/',
                colleges: data[0].college
            });
        } else {
            res.render('uploadFile', {
                title: 'File Upload Page',
                uploadPath: '/upload/college/'
            });
        }
    });
};

exports.q2SpecificCollege = function(req, res) {
    res.render('q2');
};

exports.q3 = function(req, res) {
    res.render('q3');
};
