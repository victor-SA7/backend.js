const ProductModel = require('../models/ProductModel');
const jwt = require('jsonwebtoken');

const ProductController = {
    create(request, response) {
        ProductModel.create(request.body);
        response.json({
            message: "Produto criado com sucesso"
        });
    },

    async list(request, response){
        const products = await ProductModel.findAll();
        response.json(products);
    }

//     async list(request, response) {
//         let token = request.headers.authorization ? request.headers.authorization.split(' ') : ''
//             token = token ? token[1] : ''
        
//         if (!token){
//             response.json({message: "Token inválido!", sucess: false})
//         } else{

//             // let authSecret = 'Sfk802$#djhsa@Sf93s2&(3'

//             try{
//                 // throw new Error("meu proprio erro");
//                 const decoded = jwt.verify(token, process.env.JWT_SECRET);
//                 console.log(decoded);
//                 const products = await ProductModel.findAll({
//                     where: { user_id: decoded.id }
//                 });
                
//                 response.json(products);

//             } catch(error){
//                 // if(error.name === "SequelizeDatabaseError"){
//                 //     return response.json({
//                 //         message: "Ocorreu um erro no servidor"
//                 //     });
//                 // }
//                 // console.log(error.message);
//                 // // console.log(Object.getOwnPropertyNames(error));
//                 return response.json({
//                     message: error.message
//                 })
//             }

           
            
            

//         }
//     }
// 
}

module.exports = ProductController;