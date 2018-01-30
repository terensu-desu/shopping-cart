var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	// this is the blueprint of how my data under var schema will look.
	user: {type: Schema.Types.ObjectId, ref: 'User'}, //ref links to the User model and stores that as an object
	cart: {type: Object, required: true},
	address: {type: String, required: true},
	name: {type: String, required: true},
	paymentId: {type: String, required: true}
});

module.exports = mongoose.model('Order', schema);