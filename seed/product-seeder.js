var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
	new Product({
		imagePath: 'https://i.imgur.com/U5rCVuQ.jpg',
		title: 'A Clash of Kings',
		description: 'Excellent book from George R.R. Martin!!!',
		price: 10
	}),
	new Product({
		imagePath: 'https://i.imgur.com/ZL08TtA.jpg',
		title: 'A Scanner Darkly',
		description: 'Excellent book from Philip K. Dick!!!',
		price: 10
	}),
	new Product({
		imagePath: 'https://i.imgur.com/tBv3OLi.jpg',
		title: 'Neuromancer',
		description: 'Excellent book from William Gibson!!!',
		price: 10
	}),
	new Product({
		imagePath: 'https://i.imgur.com/0kUW0VW.gif',
		title: 'The Fellowship of the Ring',
		description: 'Excellent book from J.R.R. Tolkien!!!',
		price: 10
	}),
	new Product({
		imagePath: 'https://i.imgur.com/wB3l9tL.jpg',
		title: 'A New Spring',
		description: 'Excellent book from Robert Jordan!!!',
		price: 10
	}),
	new Product({
		imagePath: 'https://i.imgur.com/U9YmA2W.jpg',
		title: "Ender's Game",
		description: 'Excellent book from Orson Scott Card!!!',
		price: 10
	}),
	new Product({
		imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51jtY2WCB-L._SY344_BO1,204,203,200_.jpg',
		title: 'The Vampire Lestat',
		description: 'Excellent book from Anne Rice!!!',
		price: 10
	}),
	new Product({
		imagePath: 'https://indiereader.com/wp-content/uploads/2013/07/gatsby-original2.jpg',
		title: 'The Great Gatsby',
		description: 'Excellent book from F. Scott Fitzgerald!!!',
		price: 10
	})
];

var done = 0;
// loop through array of products and use mongoose save() method to save into the database
// because saving is asycronous, we need to disconnect from mongoose in a callback
for(let product of products) {
	product.save(function(err, result) {
		done++;
		if(done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}