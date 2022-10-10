const express= require('express');
const { Model, Sequelize } = require('sequelize');
const router = express.Router();
const userController = require('../controller/usercon')

const userSchema= Sequelize.Schema(
    {
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        firstname:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        profilepicture : String,
        coverpicture: String,
        about:String,
        email: String,
        },
    
)

//sql cosnt


Model.exports = router;