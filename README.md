#### Note: please make sure that you have node.js installed on your machine. 


# 1. Setup
* run `npm install` to install all dependencies needed that are listed inside the package.json file.
* this API  is by default connected to a mySQL database deployed on Heroku, if you wish to try this API using your own datababase please check item 1.1, if not, please ignore it.
## 1.1 Setting up you own database
* Open `src/config/database.js` and edit it's module exports' object with your database credentials. 
* After making sure those credentials are correct, please run `npx sequelize db:migrate` as it will create all the needed tables on your database for this API to work. 
# 2. initializing the server
* run `npm run dev` to initialize the express server, by default it's port is set to http://localhost:3333
# 3. API's routes
* `GET - /checkouts` -  Will return all of the previously stored Checkout objects in the database that it's connected.
* `POST - /checkout` - Will insert into the database the checkout object being sent through the requesition body.Please make sure that your object follows the following structure: `{           "clientName": "testea",
            "clientEmail": "",
            "clientAdress": "",
            "totalBRL": ,
            "products": [
                {
                    "productName": "",
                    "productValue": 20.30,
                    "productQuantity": 2
                },
                 {
                    "productName": "",
                    "productValue": 20.30,
                    "productQuantity": 2
                }
            ]
}`
