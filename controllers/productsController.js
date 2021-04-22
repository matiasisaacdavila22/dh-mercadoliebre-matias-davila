let products = require('../data/productsDataBase.json')

const controller = {
    index: (req, res) => {
        return products;
    },
    	// Detail - Detail from one product
	detail: (req, res) => {
		res.send('Detail de product');
	},

	// Create - Form to create
	create: (req, res) => {
		res.send('create new product');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		res.send('guardar new product');
	},

	// Update - Form to edit
	edit: (req, res) => {
        res.send('form de edit product');
	},
	// Update - Method to update
	update: (req, res) => {
		res.send('update product');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.send('delete product');
	}
};

module.exports = controller;