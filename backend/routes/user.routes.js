

const express = require("express")

const userRouter = express.Router()
const bcrypt = require("bcrypt")
const  jwt = require('jsonwebtoken');
const { UserModel } = require("../models/user.model");


userRouter.post("/register", (req, res) => {     

    const { username, email, pass } = req.body

    try {

        bcrypt.hash(pass, 5, async (err, hash) => {
            if (err) {
                res.status(200).send({ "error": err.message })
            } else {
                const user = new UserModel({ username, email, pass: hash })
                await user.save()
                res.status(200).send({ "msg": "A new user has been registered", "newUser": req.body })
            }
        })

    } catch (err) {
        res.status(400).send({ "error": err })
    }
    
})

// login

userRouter.post("/login", async (req, res) => {
    const {email, pass} = req.body
        try{
        
            const user = await UserModel.findOne({email})
            console.log(user)
    
            //  tocheck password
            bcrypt.compare(pass, user.pass, (err, result) =>{
                  if(result){
                    //  to generate token
                    const token =  jwt.sign({username : user.username}, "masai")
                   res.status(200).send({"msg" : "Login successfull", "token" : token , user: user})
    
                  }else{
                    res.status(200).send({"msg" : "wrong password"})
                  }
              });
            
        }catch(err){
            res.status(400).send({ "error": err })
    
        }
    })
    
module.exports = {
    userRouter
}