const fs = require('fs');
const model = require('../schema/userSchema');
const mongoose = require('mongoose');

const control ={
    cUser(req, res){
        var m = model({
            name: req.body.name,
            nick: req.body.nick,
            phone: req.body.phone,
            email: req.body.email,
            date: Date.now()
        })
        m.save();
        console.log('New User Here!')
        res.status(200).send('USER CREATED')
    },

    searchUser(req, res){
        var q = model.findOne(req.query)
        q.exec((err, re)=>{
            console.log('Searched guy!')
            res.status(200).send(re)
        })
    },

    updateUser(req, res){
        var q = model.findById(req.query._id, (err, re)=>{
            console.log(req.body)
            res.status(200).send(re)
        })
    }
}
module.exports = control;