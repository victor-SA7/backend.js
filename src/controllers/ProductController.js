const ProductModel = require('../models/ProductModel');

const ProductController = {
    create(request) {
        ProductModel.create(request.body);
    },

    async list() {
        let products = await ProductModel.findByPk(1, {
            attributes: ['name', 'price']
        });
        console.log(products.dataValues);
    }
}

module.exports = ProductController;