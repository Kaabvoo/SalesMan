const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const database = 'TestUsers'

const schema = new Schema({
    name: String,
    nick: String,
    phone: String,
    email: String,
    date: String
})

module.exports = mongoose.model(database, schema);