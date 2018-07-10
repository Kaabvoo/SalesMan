const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const database = 'shopLocation'

const schema = new Schema({
    nameShop: String,
    location: String,
    schedule: String,
})

module.exports = mongoose.model(database, schema);