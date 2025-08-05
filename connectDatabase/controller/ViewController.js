const { model } = require('mongoose');
const User = require('../models/User');

module.exports.ViewUserAction = async(req,res)=>{
    // Fine All Record and show
    const UsersData = await User.find()

    return res.status(200).render('view-user',{
        'userData' : UsersData
    });
}

module.exports.DeleteUserAction = async(req,res)=>{
    // Delete User by id
    const response = await User.findByIdAndDelete(req.query.id);
    if(response){
        return res.status(200).redirect('http://localhost:3000/view');
    }
}
