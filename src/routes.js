const express = require('express');

const routes = express.Router();

const checkoutController = require('./controllers/checkoutController');

routes.post('/checkout', checkoutController.save);

routes.get('/checkouts', checkoutController.getAll)

module.exports = routes;