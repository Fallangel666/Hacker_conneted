import React from 'react';
import ReactDOM from 'react-dom'

import app from './app'

require ('dotenv').config()
const express = require ('express')
const error404 = require('./error404')


app.set('view engine', 'jsx')
app.engine('jsx', require ('express-react-views').createEngine())
app.use(express.static('home.js'))
app.use(express.urlencoded({ extended: true }))

app.use ('/routes', require('../controller/usercon'))
app.get('/', (req,res) => {
    res.render('home')
})

//wrong page
app.get('*', (req,res) => {
    res.render (error)
})
app.listen (process.env.Port)