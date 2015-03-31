var fs = require('fs'),
	csv = require('csv'),
	College = require('../../../models/College');

var csvData = {};

var parser = csv.parse(function(err, data){
	if(err) throw err;
	csvData = data;
});

module.exports = function(req, res) {
	var stream = fs.createReadStream(req.files.csvFile.path);
	stream.pipe(parser);
	parser.on('end', function(){
		console.log('End Parsing');
		var colleges = new College({
			colleges : csvData
		});

		colleges.save(function(err, data){
			if(err) console.log(err);
			console.log(data);
    		res.send('File uploaded successfully');
		});
	})
};
