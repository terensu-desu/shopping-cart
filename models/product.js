var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	// this is the blueprint of how my data under var schema will look.
	imagePath: {type: String, required: true},
	title: {type: String, required: true},
	description: {type: String, required: true},
	price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);