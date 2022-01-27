const checkoutModel = require('../models/checkout');
const productModel = require('../models/product');
const axios = require('axios')
const dbConnection = require('../database/index')

async function saveProducts(checkoutId, productsList) {

    for (let product of productsList) {

        product['checkoutId'] = checkoutId
        await productModel.create(product)
            .then(produto => produto)
            .catch(error => error)
    }
}

async function getDolarValue() {
    await axios.get('https://api.hgbrasil.com/finance')
        .then(response => response.data.results.currencies.USD
        )
        .catch(error => error)
}

module.exports = {
    async save(req, res) {
        let USD
        await axios.get('https://api.hgbrasil.com/finance')
            .then(response => {
                USD = response.data.results.currencies.USD
            })
            .catch(error => error)

        const newCheckout = req.body
        newCheckout['totalUSD'] = (newCheckout.total * USD.buy).toFixed(2);

        let transaction

        try {
            transaction = await dbConnection.transaction()

            await Promise.all([
                await checkoutModel.create(newCheckout, transaction).then(
                    async createdCheckout => {
                        for (let product of newCheckout.products) {
                            //product['checkoutId'] = createdCheckout.id;

                            await productModel.create(product, transaction);
                        };
                    }
                )
            ])

            await transaction.commit();
            return res.json({
                message: 'checkout saved sucessfully'
            })

        } catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
            return res.json({
                error: error
            })
        }


    }
}