var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TuitionSchema = new Schema({
    tuition: Schema.Types.Mixed
}, {
    strict: false
});

module.exports = mongoose.model('tuition', TuitionSchema);
