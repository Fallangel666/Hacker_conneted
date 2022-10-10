const Express=  require("express");
//register user imprt
const {registerUser} =require("../controller/authcon.js")

const router =express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
export default router