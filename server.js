var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    path = require('path'),
    config = require('./config'),
    multer = require('multer');

// conect to db
mongoose.connect(config.database);

/*
	App Configuration
 */

app.set('view engine', 'jade');
app.set('views', path.join(__dirname + '/app/views'));

// Logging
app.use(morgan('dev'));

// File Upload 
app.use(multer({
	onFileUploadStart : function(file){
		console.log('Uploading' +  file);
	}
}));

app.use(express.static(__dirname + '/public'));

var appRouter = require('./app/routes/app')(app, express);
app.use('/', appRouter);

var apiRouter = require('./app/routes/api')(app, express);
app.use('/api', apiRouter);

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/public/404.html'));
});

app.listen(config.port);
console.log('The app is running on port ' + config.port);
