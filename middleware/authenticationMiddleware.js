const jwt = require('jwt');




const isAuthenticated = (req , res , next) => {
    if (){
     const token = req.header.authorization.replace('Bearer', '')

     if (){}
        next();
    }else{
        res.status(401).json({message:'unautherized'});
    }
}