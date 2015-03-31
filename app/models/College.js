var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../../config');

var CollegeSchema = new Schema({
    college: Schema.Types.Mixed
}, {
    strict: false
});

module.exports = mongoose.model('college', CollegeSchema);
