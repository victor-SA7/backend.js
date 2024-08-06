const UserModel = require('../models/UserModel');
const ProductModel = require('../models/ProductModel');

const UserController = {
    async create(resquest, response) {
        let messageReturn = ''
        const email = resquest.body.email
        const emailReq = await UserModel.findOne({
            where: { email }
            });

        if (!resquest.body.firstname || !resquest.body.surname || !resquest.body.email || !resquest.body.password){
            messageReturn = 'firstname, surname, email e password são obrigatórios!'
            return response.status(400).json({
                message: messageReturn
            })
        } 
        else if (emailReq && emailReq.dataValues.id > 0){
            messageReturn = 'Esse email já está cadastrado!'
            return response.status(400).json({
                message: messageReturn
            })
        }
        
        UserModel.create(resquest.body);
        messageReturn = 'Usuario criado com sucesso!'

        response.status(201);
        return response.json({
            message: messageReturn
        });
    },

    async list(request, response) {
        const users = await UserModel.findOne();

        const products = await ProductModel.findAll({
            where: {
                user_id: users.id
            }
        });

        users.setDataValue('products', products);

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