/*import post from "../loginmodel/post.js";
import { Sequelize } from "sequelize";
import { BADNAME } from "dns";*/
const posts = require('express').Router
const db = require('../loginmodel')
const {post, user}=db
const {Op}= require('sequelize')


//create
/*export const cPost= async(req,res)=> {
    const nPost= new post(req.body)

    try{
        await nPost.save()
        res.status().json("post created")
    }catch (error){
        res.status(404).json(error)
    }
}*/
posts.post('/', async (req, res) => {
    try {
        const newPost = await Post.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new post',
            data: newPost
        })
    } catch (error) {
        res.status(500).json(error)
    }
})


//get post
/*export const getPost= async(req,res)=>{
    const id= req.params.id

    try{
        const posted = await post.findByID(id)
        res.status().json(posted)
    } catch(error){
        res.status(500).json(error)
    }
}*/
posts.get('/:name', async (req,res) =>{
    try{
        const findPosts= await post.findOne({
            where:{
                user_id:req.params.name
            }
            [{
                model: user,
                as:"users"
            }]
        })
        res.status(200).json(findPosts)
    }catch(error){
        res.status(500).json(error)
    }
})

//update
/*export const uPost= async(req,res)=>{
    const postID=req.params.id
    const{userID}=req.body

    try{
        const post= await post.findByID(postId)
        if(post.userID===userID)
        {
            await post.update({$set:req.body})
            res.status(200).json("Updated post")
        }
    
    } catch(error){
        res.status(500).json(error)
    }
}*/
posts.put('/:id', async (req,res) =>{
    try{
        const updatePosts= await posts.update({
            where:{
                post_id:req.params.id
            }
        })
        res.status(200).json({
            message:`Success. Updated user ${updatePosts} .`
        })
    }catch(error){
        res.status(500).json(error)
    }
})


//delete
/*export const dPost= async(req,res)=> {
    const id= req.params.id;
    const{userID}=req.body

    try{
        const post= await dPost.findByID(id)
        if(post.userID===userID)
        {
            await post.delete();
            res.status(200).json("post deleted")
        }

    }catch(error){
        res.status(500).json(error)
    }

}*/
posts.delete('/:id', async (req,res) =>{
    try{
        const deletedPost= await posts.destroy({
            where:{
                post_id:req.params.id
            }
        })
        res.status(200).json({
            message:`Success. ${deletedPost} was deleted.`
        })
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = posts