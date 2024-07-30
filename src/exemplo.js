
const connection = require('./database/connection');
const {QueryTypes} = require('sequelize');

async function execute() {
    const resultado = await connection.query("DESCRIBE produtos", {
        type: QueryTypes.DESCRIBE
    });

    const produtos = await connection.query("SELECT * FROM produtos WHERE id = 1", {
        type: QueryTypes.SELECT
    });

    const update = await connection.query("UPDATE produtos SET name = 'Iphone TESTE' WHERE id = 1", {
        type: QueryTypes.UPDATE
    });

    console.log(update);
}

execute(); 
