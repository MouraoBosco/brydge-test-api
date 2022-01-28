const express = require('express');
const routes = require('./routes');
const cors = require('cors')
require('./database/index')


const port = '3333';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(port);

console.log(`server up on http://localhost:${port}`)

module.exports = app