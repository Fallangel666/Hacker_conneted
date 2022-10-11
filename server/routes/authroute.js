const Express=  require("express");

const {registerUser} =require("../controller/authcon.js")

const router =express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
module.export= router