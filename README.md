# Note: please make sure that you have node.js installed on your machine. 

# 1. Setup
* run `npm install` to install all dependencies needed that are listed inside the package.json file.
* this API  is by default connected to a mySQL database deployed on Heroku, if you wish to try this API using your own datababase please check item 1.1, if not, please ignore it.
## 1.1 Setting up you own database
* Open `src/config/database.js` and edit it's module exports' object with your database credentials. 
* After making sure those credentials are correct, please run `npx sequelize db:migrate` as it will create all the needed tables on your database for this API to work. 
# 2. initializing the server
* run `npm run dev` to initialize the express server, by default it's port is set to http://localhost:3333
# 3. API's endpoints
* `GET - /checkouts` -  Will return all of the previously stored Checkout objects in the database that it's connected.
* `POST - /checkout` - Will insert into the database the checkout object being sent through the requesition body. Please make sure that your object follows the following structure: `{           "clientName": STRING TYPE FIELD THAT SUPPORTS UP TO 255 characters,
            "clientEmail": STRING TYPE FIELD THAT SUPPORTS UP TO 255 characters,
            "clientAdress": STRING TYPE FIELD THAT SUPPORTS UP TO 255 characters,
            "totalBRL": DECIMAL TYPE FIELD THAT SUPPORTS UP TO 15 DIGITS BEFORE THE DECIMAL POINT AND 2 AFTER,
            "products": [
                {
                    "productName": STRING TYPE FIELD THAT SUPPORTS 255 characters,
                    "productValue": DECIMAL TYPE FIELD THAT SUPPORTS UP TO 15 DIGITS BEFORE THE DECIMAL POINT AND 2 AFTER,
                    "productQuantity": INT TYPE FIELD 
                },
            ]
}`
## 3.1 A real exemple of the expected JSON at the `POST - /checkout` endpoint
* ` {       "clientName": "João Bobo das Neves",
            "clientEmail": "joaobobo@hotmail.com",
            "clientAdress": "Rua dos bobos, número 0",
            "totalBRL": 50.00,
            "products": [
                {
                    "productName": "Caneta azul",
                    "productValue": 5.00,
                    "productQuantity": 2
                },
                 {
                    "productName": "Toalha do Flamengo",
                    "productValue": 40.00,
                    "productQuantity": 1
                }
            ]
}`
* please note that the key `products` do accepts more than one object.
