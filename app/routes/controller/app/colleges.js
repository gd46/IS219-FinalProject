var College = require('../../../models/College');

module.exports = function(req, res) {
    College.find({}, function(err, data) {
        if (err) throw err;
        if (data.length > 0) {
            res.render('listColleges', {
                title: 'All Colleges',
                url: '/college/',
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
