const express = require('express')
const controllapi = require('../controller/controllapi');
const urls = express.Router();

urls.route('/createUser')
    .post(controllapi.cUser)
urls.route('/searchUser')
    .get(controllapi.searchUser)
module.exports = urls;