const router = require("express").router();

router.get("/", (req,res)=>{
    res.send("hey its your profile")
})

module.exports = router