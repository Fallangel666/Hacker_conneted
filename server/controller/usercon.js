import user from "../model/user"
import bcrypt from bcrypt

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
};

export const deleteUser= async (req,res) =>{
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
}

