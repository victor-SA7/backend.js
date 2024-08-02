const express = require('express');
const app = express();

app.use(express.json());

const ProductModel = require('./models/ProductModel');
const UserModel = require('./models/UserModel');

app.get('/products', async function(request, response) {
    const products = await ProductModel.findAll();
    response.json(products);
});

app.get('/users', async function(request, response) {
    const users = await UserModel.findAll();
    response.json(users);
});

app.post('/users', function(resquest, response) {
    UserModel.create(resquest.body);
    return response.json({
        message: "Usuario criado com sucesso!"
    });
});

app.listen(3000);













// const UserController = require('./controllers/UserController');

// const request = {
//     body: {
//         firstname: "Joaquim",
//         surname: "Silva",
//         email: "joaqui@mail.com",
//         password: "1234",
//     }
// }

// UserController.create(request);
// UserController.list();



// const ProductController = require('./controllers/ProductController');

// const request = {
//     body: {
//         name: "Motorola",
//         price: 19.58,
//         description: "Descrição do produto"
//     }
// }

// // ProductController.create(request);
// ProductController.list();