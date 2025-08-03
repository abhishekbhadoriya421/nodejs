const User = require('../models/User')
// Create User Form

exports.UserFormAction = (req,res)=>{
    try{
        const userModel = new User();
        return res.status(200).render('user-form', { title: 'User Form', userModel: userModel });
    }catch(err){
        console.log(err);
        throw new Error("Unexpected Error Occurred :", e.messaged);
    }
}

exports.CreateUserAction = async (req,res)=>{
    try{
        const { name, email} = req.body;
        if(!name || !email){
            return res.status(400).render('user-form',{ message: "Please fill in all fields" , status: false});
        }else{
            const userModel = new User();
            userModel.name = name;
            userModel.email = email;
            const response = await userModel.save();
            if(response.id){
                return res.status(200).render('user-form',{ message: "Successfully Create The Record" , status: true,'userModel':response});
            }else{
                return res.status(500).render('user-form',{ message: "Something went wrong while creating record" , status: false});
            } 
        }
    }catch(err){
        console.log(err);
        throw new Error("Unexpected Error Occurred :" + err.errorResponse.errmsg);
    }
}



