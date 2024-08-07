const UserModel = require('../models/UserModel');
const ProductModel = require('../models/ProductModel');
const bcrypt = require("bcrypt");

const UserController = {
    async create(request, response) {
        
        let hash = await bcrypt.hash(request.body.password, 10);
        request.body.password = hash;

        UserModel.create(request.body);
        messageReturn = 'Usuario criado com sucesso!'

        response.status(201);
        return response.json({
            message: messageReturn
        });
    },

    async login(request, response) {
        let email = request.body.email;
        let password = request.body.password

        let user = await UserModel.findOne({
            where: { email }
        });

        let hasValid = await bcrypt.compare(password, user.password);

        response.json({
            message: hasValid
        })
    },

    async list(request, response) {
        const users = await UserModel.findAll();

        /*const products = await ProductModel.findAll({
            where: {
                user_id: users.id
            }
        });

        users.setDataValue('products', products);*/

        return response.json(users);
    },

    async update(request, response) {
        let id = request.params.id;
        
        UserModel.update(request.body, {
            where: { id } // id: id
        });

        return response.json({
            message: "Usuario atualizado com sucesso"
        });
    },

    async delete (request, response) {
        let id = request.params.id;
        UserModel.destroy({
            where: { id }
        });

        return response.json({
            message: "Usuario deletado com sucesso"
        })
    }
}

module.exports = UserController;