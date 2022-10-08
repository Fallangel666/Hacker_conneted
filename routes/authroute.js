import  Express  from "express";
//register user imprt
import {registerUSer} from "../controller/authcon.js"

const router =express.Router()

router.post('/register', registerUSer)
router.post('login', loginUser)
export default router