const path = require('path')
/**
 * Static page rendering
*/
exports.homeController = (req,res)=>{
    console.log('this is here',)
    return res.status(200).sendFile(path.join(__dirname,'../public/about.html'));
}

exports.aboutController = (req,res)=>{
    return res.status(200).render('home',{
        name:'Abhishek',
        time: new Date().toLocaleTimeString()
    })
}
   