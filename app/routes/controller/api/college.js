var mongoose = require('mongoose');
var college = mongoose.model('college');
var Schema = Schema = mongoose.Schema;

exports.list = function(req, res){
	var collegeData;
  college.find({}, function(err, colleges){
        collegeData = colleges;
      });
	res.render('listColleges', {
		colleges: collegeData
	});
}