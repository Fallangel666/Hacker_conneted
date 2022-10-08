import express from "express";
import {getuser} from "../controller/usercon"

const router= express.Router();

router.get('/:id', getuser)

export default router