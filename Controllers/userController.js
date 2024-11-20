const user=require("../Models/userSchema")
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.register=async (req,res)=>{
  const{username,email,password}=req.body
  console.log(username,email,password);
  try {
    const existingUser=await user.findOne({email})
    console.log(existingUser);
    if(existingUser){
      res.status(406).json("user already exists,please login")
    }
    else{
      // console.log("here");
      const newUser=new user({username,email,password})
      await newUser.save()
      res.status(201).json(newUser)
    }
  } catch (error) {
    res.status(401).json(error)
  }
  
 
}

exports.login=async(req,res)=>{
  // console.log("in login");
  const{email,password}=req.body
  console.log(email,password);
  
  try {
    console.log("in login");
    const existingUser=await user.findOne({email,password})
    console.log(existingUser);
    
    if(existingUser){
      console.log("here");
      console.log('Payload:', { userId: existingUser._id });

        const token=jwt.sign({userId:existingUser._id},process.env.jwt_secret)
        console.log(token);
        
        res.status(200).json({existingUser,token})
      }
      else{
        res.status(406).json("credentials dont match")
      }
  } catch (error) {
    res.status(401).json(error)
  }
  
}