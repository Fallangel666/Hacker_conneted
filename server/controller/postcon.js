const posts = require('express').Router()
const db = require('../loginmodel')
const {post, user}=db
const {Op}= require('sequelize')

posts.get('/', async(req, res) => {
    try {
        const foundPost = await Post.findAll({
            order: [['available_start_time', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

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