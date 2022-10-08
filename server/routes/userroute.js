import express from "express";
import {deleteUser, getuser, updateUser} from "../controller/usercon.js"

const router= express.Router();

router.get('/:id', getuser)
router.put('/:id', updateUser)
router.delete('/id',deleteUser)

export default router;