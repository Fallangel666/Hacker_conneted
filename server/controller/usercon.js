<<<<<<< HEAD
import user from "../model/user"
import bcrypt from bcrypt
=======
const users = require('express').Router
const db = "../loginmodel"
const {user}= db
const {Op} = require('sequelize')
>>>>>>> d937307ae2452f37c6279ddfbd421cd377ff06e5


/*
//get user
export const getUser = async(req, res)=> {
    const id =req.params.id;

    try{
    const user =await user.findByID(id);

    if(user)
        {
            res.status().json(user)
    }
    else{
        res.status(404).json("none existant user")
    }
}   catch(error){
    res.status().json(user)
}
}*/
users.get('/:name', async (req,res) =>{
    try{
        const findUsers= await user.findOne({
            where:{
                user_id:req.params.name
            }
            [{
                model: user,
                as:"users"
            }]
        })
        res.status(200).json(findUsers)
    }catch(error){
        res.status(500).json(error)
    }
})
//user update
/*export const updateUser= async(req,res)=>{
    const id= req.params.id
    const {currentUserID, currentUserStat, password}= req.body

    if(id ===currentUserID || currentUserStat)
    {
        try{

//passwordupdate
            if(password)
            {
                const salt= await bcrypt.gensalt(10);
                req.body.password= await bcrypt.hash(password,salt)
            }

            const user= await user.findByIDAndUpdate(id, req.body,{new: true})

            res.status().json(user)
        }catch(error){
            res.status().json(error)
        }
    }
    else{
        res.status().json("Denied access")
    }
};*/
users.put('/:id', async (req,res) =>{
    try{
        const updateUsers= await user.update({
            where:{
                user_id:req.params.id
            }
        })
        res.status(200).json({
            message:`Success. Updated ${updateUsers} user.`
        })
    }catch(error){
        res.status(500).json(error)
    }
})

/*export const deleteUser= async (req,res) =>{
    const id= req.params.id

    const{currentUserID, currentUserStat}= req.body
    if(currentUserID===id || currentUserStat)
    {
        try{
            await user.findByIDAndDelete(id)
            res.status().json("Profile Deleted")
        }
        catch(error){
            res.status().json(error)
        }
    }
    else{
        res.status().json("Denied access. Profile Deleted")
    }
}*/
users.delete('/:id', async (req,res) =>{
    try{
        const deletedUsers= await user.destroy({
            where:{
                user_id:req.params.id
            }
        })
        res.status(200).json({
            message:`Success. Deleted ${deletedUsers} user.`
        })
    }catch(error){
        res.status(500).json(error)
    }
})

module. exports = users