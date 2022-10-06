const router = require("express").router();
const db = require("../loginapi");
import { Model } from "sequelize";

router.get("/", (req,res) =>{
    db.find()
    .then((routes)=>{
        res.render("routes", {routes});
    })
    .catch((err)=> {
        console.log(err);
        res.render("error404")
    })
})



Model.exports= router;