const express = require("express");
const {deleteUser, getuser, updateUser} =require("../controller/usercon.js")

const router= express.Router();

router.get('/:id', getuser)
router.get('/', getAlluser)
router.put('/:id', updateUser)
router.delete('/id',deleteUser)

export default router;