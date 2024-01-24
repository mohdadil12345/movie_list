
const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
 
const token = req.headers.authorization?.split(" ")[1]

    if(token){
        
       jwt.verify(token, "masai", (err, decoded) => {
             if(decoded){
                console.log(decoded) 
                req.body.username = decoded.username

                next() 
             }else{
                res.send({"msg" : "You are not authorized"})
             }
       })

    }else{
        res.send({"msg" : "Please login first"})
    }


}




module.exports = {
    auth
}