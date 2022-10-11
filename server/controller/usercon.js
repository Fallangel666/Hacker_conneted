const user = require("../model/user")
const users = require('express').Router
const db = "../loginmodel"
const {user}= db
const {Op}= require('sequelize')


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