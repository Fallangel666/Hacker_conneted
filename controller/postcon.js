import post from "../loginmodel/post";
import { Sequelize } from "sequelize";

//create
export const cPost= async(req,res)=> {
    const nPost= new post(req.body)

    try{
        await nPost.save()
        res.status().json("post created")
    }catch (error){
        res.status(404).json(error)
    }
}