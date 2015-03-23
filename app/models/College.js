var Schema = require('mongoose').Schema,
    config = require('../../config');

var CollegeSchema = new Schema({
    college: []
}, {
    strict: false
});

module.exports = mongoose.model('college', CollegeSchema);
