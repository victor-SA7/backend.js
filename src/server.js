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



const ProductController = require('./controllers/ProductController');

const request = {
    body: {
        name: "Motorola",
        price: 19.58,
        description: "Descrição do produto"
    }
}

// ProductController.create(request);
ProductController.list();