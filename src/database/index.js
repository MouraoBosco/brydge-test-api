const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database')

// Models declarations
const checkout = require('../models/checkout');
const products = require('../models/product');

//DataBase Connection instance
const dbConnection = new Sequelize(dbConfig);

//initializing Models 
checkout.init(dbConnection);
products.init(dbConnection);

//initializing associations
products.associate(dbConnection.models);
checkout.associate(dbConnection.models)


module.exports = dbConnection;