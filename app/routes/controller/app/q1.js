var config = require('../../../../config'),
    _ = require('lodash'),
    async = require('async'),
    College = require('../../../models/College'),
    Enrollment = require('../../../models/Enrollment');

module.exports = function(req, res) {
    var collegeData = [];
    Enrollment.find({}, function(err, data) {
        if (err) throw err;
        if (data) {
            var array = _.sortBy(data[0].enrollment, function(num) {
                return num.EFTOTLT;
            }).reverse();
            var length = array.length - 1;
            array.splice(10, length);
            var jsonData = {};
            async.forEach(array,
                function(item, callback) {
                    College.findOne({}, {
                        'college': {
                            $elemMatch: {
                                "UNITID": parseInt(item.UNITID)
                            }
                        }
                    }, function(err, clg) {
                        if (err) throw err;
                        if (clg) {
                            jsonData['name'] = clg.college[0].INSTNM;
                            jsonData['enrollment'] = item.EFTOTLT;
                            collegeData.push(jsonData);
                            callback();
                        } else {
                            res.render('uploadFile', {
                                uploadPath: '/upload/college/'
                            });
                        }
                    });
                },
                function(err) {
                    if (err) throw err;
                    res.json(collegeData);
                });
        } else {
            res.render('uploadFile', {
                uploadPath: '/upload/enrollment'
            });
        }
    });
};
