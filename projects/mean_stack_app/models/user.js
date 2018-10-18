var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}] // [] tells mongodb that there will be multiple messages 
});

// add plugin or addon packages to mongoose for unique validation
schema.plugin(mongooseUniqueValidator);

// creates a collection call users
module.exports = mongoose.model('User', schema);