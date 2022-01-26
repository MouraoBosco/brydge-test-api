const express = require('express');
const routes = require('./routes');

const app = express();
require('./database/index')

const port = '3333';

app.use(express.json());
app.use(routes)

app.listen(port);

console.log(`server up on port ${port}`)

module.exports = app