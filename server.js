var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    config = require('./config');

// conect to db
//mongoose.connect(config.database);

/*
	App Configuration
 */

// Logging
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

var apiRouter = require('./app/routes/api')(app, express);
app.use('/api', apiRouter);

app.listen(config.port);
console.log('The app is running on port ' + config.port);
