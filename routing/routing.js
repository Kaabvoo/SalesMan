const express = require('express')
const control = require('../controller/controller')
const urls = express.Router();

urls.route('/')
    .get(control.inicio)
module.exports = urls;