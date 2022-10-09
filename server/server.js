import express from "express";
import bodyParser from 'body-parser';
//sql import
import dotenv from "dotenv";
import authroute from './routes/authroute.js'
import userroute from  '../routes/userroute.js'

//routes

const app = express();
const PORT = process.env.PORT
//midware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


dotenv.config()

//sqldb goes here

//import { alignPropType } from "react-bootstrap/esm/types";

//toute usage
app.use('/auth', authroute)
app.use('/user', userroute)
app.use('/post', postroute)

app.listen(PORT)