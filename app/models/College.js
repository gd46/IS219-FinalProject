var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../../config');

var CollegeSchema = new Schema({
    college: []
}, {
    strict: false
});

module.exports = mongoose.model('college', CollegeSchema);
