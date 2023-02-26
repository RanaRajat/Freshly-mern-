const jwt = require("jsonwebtoken");
const secret = "shhhhhh";

const verifyToken = (req,res,next)=>{
     const bearerHeader = req.headers['authorization'];
     console.log(req.headers,bearerHeader);
     if(bearerHeader){
        const token = bearerHeader.split(" ")[1];
        const result = jwt.verify(token,secret);
        console.log(result);
        next();
     }
     else{
     res.send({msg:"Token not valid"});
     }
}


module.exports = verifyToken;