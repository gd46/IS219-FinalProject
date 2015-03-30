var College = require('../../../models/College');

module.exports = function(req, res) {
    College.find({}, function(err, data) {
        if(err) throw err;

        if(data.length > 0){
        	res.render('listColleges', {
        		title: 'Colleges',
        		colleges: data
        	});
        } else{
        	res.render('uploadFile', {
        		title: 'File Upload Page'
        	});    
        }
    });
};
