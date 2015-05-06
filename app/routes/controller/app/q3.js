var async = require('async'),
    College = require('../../../models/College'),
    Tuition = require('../../../models/Tuition');

module.exports = function(req, res) {
    var collegeData = [];
    Tuition.findOne({}, {
        'tuition': {
            $elemMatch: {
                "UNITID": parseInt(req.params.id)
            }
        }
    }, function(err, tuition) {
        if (err) throw err;
        if (tuition) {
            var UNITID = tuition.tuition[0].UNITID;
            var Tuition_09 = tuition.tuition[0]['09_Tuition'];
            var Tuition_10 = tuition.tuition[0]['10_Tuition'];
            var Tuition_11 = tuition.tuition[0]['11_Tuition'];
            College.findOne({}, {
                'college': {
                    $elemMatch: {
                        "UNITID": UNITID
                    }
                }
            }, function(err, college) {
                if (err) throw err;
                if (college) {
                    res.json({
                        INSTNM: college.college[0].INSTNM,
                        UNITID: UNITID,
                        Tuition_09 : Tuition_09,
                        Tuition_10 : Tuition_10,
                        Tuition_11 : Tuition_11
                    });
                }
            });
        }
    });
};
