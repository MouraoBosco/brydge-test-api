const checkoutModel = require('../models/checkout');
const productModel = require('../models/product');
const axios = require('axios')

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
            res.json(newCheckout)

        // await checkoutModel.create(newCheckout).then(
        //     async createdCheckout => {

        //         for (let product of newCheckout.products) {
        //             product['checkoutId'] = createdCheckout.id;

        //             await productModel.create(product)
        //                 .then(
        //                     produto => {
        //                         return res.status(200).json(createdCheckout + produto)
        //                     }
        //                 )
        //                 .catch(error => {
        //                     return res.status(400).json(error)
        //                 })

        //         };
        //     }
        // )
        //     .catch(
        //         error => {
        //             return res.status(400).json(error)
        //         }
        //     )

    },
}