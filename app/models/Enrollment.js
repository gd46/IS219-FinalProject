var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EnrollmentSchema = new Schema({
    enrollment: Schema.Types.Mixed
}, {
    strict: false
});

module.exports = mongoose.model('enrollment', EnrollmentSchema);
