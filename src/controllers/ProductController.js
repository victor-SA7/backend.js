const ProductModel = require('../models/ProductModel');

const ProductController = {
    create(request) {
        ProductModel.create(request.body);
    },

    async list() {
        let products = await ProductModel.findAll();
        console.log(products);
    }
}

module.exports = ProductController;