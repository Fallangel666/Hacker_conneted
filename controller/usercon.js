import user from "../loginmodel/user"

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
}

//user update
export const updateUser= async(req,res)=>{
    const id= req.params.id
    const {currentUserID, password}= req.body
}