const express = require('express');

const routes = express.Router();

const checkoutController = require('./controllers/checkoutController');

routes.post('/checkout', checkoutController.save);

module.exports = routes;