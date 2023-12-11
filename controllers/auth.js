const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{
    try{
     const token = req.headers.authorization.split(' ')[1];
     const verify = jwt.verify(token,'qwertyuiop');
     if(verify.userType == 'Admin'){
        next();
     }
     else{
        res.status(401).json({
            message :'Not an admin'
         })
     }
     
    }
    catch{
        res.status(401).json({
           message :'invalid token '
        })
    }
}