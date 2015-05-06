var College = require('../../../models/College'),
    Enrollment = require('../../../models/Enrollment.js'),
    Tuition = require('../../../models/Tuition.js');

exports.q1 = function(req, res) {
    res.render('q1');
};

exports.q2 = function(req, res) {
    Enrollment.find({}, function(err, enrollment) {
        if (err) throw err;
        if (enrollment.length > 0) {
            College.find({}, function(error, college) {
                if (error) throw error;
                if (college.length > 0) {
                    res.render('listColleges', {
                        title: 'All Colleges',
                        url: '/q2/',
                        colleges: college[0].college
                    });
                }
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

exports.q3SpecificCollege = function(req, res) {
    res.render('q3');
};

exports.q3 = function(req, res) {
    Tuition.find({}, function(err, tuition) {
        if (err) throw err;
        if (tuition.length > 0) {
            College.find({}, function(error, college) {
                if (error) throw error;
                if (college.length > 0) {
                    res.render('listColleges', {
                        title: 'All Colleges',
                        url: '/q3/',
                        colleges: college[0].college
                    });
                }
            });
        } else {
            res.render('uploadFile', {
                title: 'File Upload Page',
                uploadPath: '/upload/tuition/'
            });
        }
    });
};
