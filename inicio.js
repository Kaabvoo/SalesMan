const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routing/routing');
const apis = require('./routing/routeapi')
const mongoose = require('mongoose');

const app = express();

const port = 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/TestSale', { useNewUrlParser: true })

app.use('/', routes);
app.use('/api', apis);

app.listen(port, ()=>{
    console.log("Escuchando en " + port);
})