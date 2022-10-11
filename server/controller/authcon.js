const usercon = require("../loginmodel/user.js")

const registerUser= async (req,res)=>{
    const{username,password,firstname, lastname}= req.body

    const newUser= new UserModel({
        username,
        password,
        firstname, 
        lastname,});

    try{
        await newUser.save(registerUser)
        res.status(200).json(newUser)
    }catch (error) {
        res.status(500).json({error})

    }
}

const loginUser= async(req,res)=>{
    const {username,password}=req.body
    try{
        const user = await UserModel.findOne({username: username})

        if(user)
        {
            const validity = await user.compare(password, user.password)

            validity? res.status(200).json(loginUser):res.status(400)
        }
        else{
            res.status(404).json("Non existant user")
        }
    }catch(error){
        res.status(500).json({error})
    }
}
module.exports =usercon