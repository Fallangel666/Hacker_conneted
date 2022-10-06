require ('dotenv').config()
const express = require ('express')
const error404 = require('./error404')
const app = express ()

app.set('view engine', 'jsx')
app.engine('jsx', require ('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use ('/')
app.get('*', (req,res) => {
    res.render('home')
})

//wrong page
app.get('*', (req,res) => {
    res.render (error)
})
app.listen (process.env.Port)