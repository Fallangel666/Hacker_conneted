const router = require("express").router();
/*for user clients 
when for is placed needs to be update when that is done*/
router.get("/", (req,res)=>{
    res.send("hey its aut route")
})

module.exports = router