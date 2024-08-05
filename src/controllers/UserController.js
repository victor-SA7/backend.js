const UserModel = require('../models/UserModel');

const UserController = {
    async create(resquest, response) {
        UserModel.create(resquest.body);
        return response.json({
            message: "Usuario criado com sucesso!"
        });
    },

    async list(request, response) {
        const users = await UserModel.findAll();
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