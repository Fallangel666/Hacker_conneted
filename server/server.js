import express from "express";
import bodyParser from 'body-parser';
//sql import
import dotenv from "dotenv";
import authroute from './routes/authroute.js'
import userroute from  '../routes/userroute.js'
import 

//routes

const app = express();
const PORT = process.env.PORT
//midware
app.use (bodyParser.json({limit: '30mb', extended:true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended:true}))

dotenv.config()

//sqldb goes here

//import { alignPropType } from "react-bootstrap/esm/types";

//toute usage
app.use('/auth', authroute)
app.use('/user', userroute)
app.use('/post', postroute)

app.listen(process.env.PORT, () =>)