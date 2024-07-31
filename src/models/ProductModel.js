const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const ProductModel = connection.define("Product", {
    name: DataTypes.STRING(255), // Obrigatorio
    description: DataTypes.TEXT, // Opcional
    price: DataTypes.DECIMAL(5,2), // Obrigatorio
    price_with_discount: DataTypes.DECIMAL(5,2), // Opcional
    enabled: DataTypes.BOOLEAN, // "Opcional" // Padrão: 0
    stock: DataTypes.INTEGER // Obrigatorio
});

module.exports = ProductModel;