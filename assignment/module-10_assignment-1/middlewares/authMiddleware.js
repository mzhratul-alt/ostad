const jwt = require('jsonwebtoken');

function checkAuth(req,res,next){
    jwt.verify(req.headers.token,process.env.JWT_SECRET,(err, decode)=>{
        if(err){
            res.status(401).json({
                error:"Unauthorized Request!"
            })
        }
    })
    next()
}

module.exports = checkAuth;