const posts = require('express').Router()
const { Post, MeetGreet, Event, SetTime } = db
const { Op } = require('sequelize')


// FIND ALL POST
posts.get('/', async (req, res) => {
    try {
        const foundPost = await Post.findAll({
            order: [['available_start_time', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})









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

//get post
export const getPost= async(req,res)=>{
    const id= req.params.id

    try{
        const posted = await post.findByID(id)
        res.status().json(posted)
    } catch(error){
        res.status(500).json(error)
    }
}
//update
export const uPost= async(req,res)=>{
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
}

//delete
export const dPost= async(req,res)=> {
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

}