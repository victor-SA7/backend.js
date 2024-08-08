const ProductModel = require('../models/ProductModel');
const jwt = require('jsonwebtoken');

const ProductController = {
    create(request, response) {
        ProductModel.create(request.body);
        response.json({
            message: "Produto criado com sucesso"
        });
    },

    async list(request, response) {
        let token = request.headers.authorization ? request.headers.authorization.split(' ') : ''
            token = token ? token[1] : ''
        
        if (!token){
            response.json({message: "Token inválido!", sucess: false})
        } else{

            let authSecret = 'Sfk802$#djhsa@Sf93s2&(3'
            const decoded = jwt.verify(token, authSecret);

            console.log(decoded);

            const products = await ProductModel.findAll({
                where: { user_id: decoded.id }
            })
            
            
            response.json(products);
        }
    }
}

module.exports = ProductController;