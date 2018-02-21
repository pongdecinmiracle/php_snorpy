const express = require('express')
var moment = require('moment');
const cors = require('cors')
//Database 
// const db = require('mongoose')
// const test = require('../models/test')
// const Auth = require('../models/AuthDB')

//express for routing
const app = express.Router()

app.post('/',cors(), function(req, res,next) {
    var name = req.body.name
    console.log(name)
    res.json(name)

  })

module.exports = app

 