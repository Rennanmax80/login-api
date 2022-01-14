require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const errorHandler = require('errorhandler');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// app.use('/users', require('./users/users.controller'));

// app.use(errorHandler);


const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3333;
app.listen(port, () => console.log('Servidor iniciado na porta ' + port))