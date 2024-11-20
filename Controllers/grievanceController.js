
//add grievance
const  grievance=require("../Models/grievanceSchema");
const user = require("../Models/userSchema");

exports.submitGrievance=async(req,res)=>{
  const{address,type,message,}=req.body
  const userId=req.payload
  // console.log(address,type,message,userId);
  const evidence=req.files.map(file=>file.filename)
  // console.log(evidence);
try {
  const userdata=await user.findById(userId)
  // console.log(userdata);
  const newGrievance=new grievance({name:userdata.username,email:userdata.email,address,type,message,evidence,userId})
  await newGrievance.save()
  res.status(201).json(newGrievance)
} catch (error) {
  res.status(401).json(error)
}
} 

//getallgrievance

exports.getallgrievance=async(req,res)=>{

try {
  const allgrievance=await grievance.find()
  console.log(allgrievance);
  
  res.status(200).json(allgrievance)
} catch (error) {
  res.status(401).json(error)
}
} 
exports.getAllUsergrievance=async(req,res)=>{
  const userId=req.payload
  console.log("here",userId);
  
  try {
    const allgrievance=await grievance.find({userId:userId},{ userId: 0,evidence:0 })
    // console.log(allgrievance);
    
    res.status(200).json(allgrievance)
  } catch (error) {
    res.status(401).json(error)
  }
  } 
exports.updateStatus=async(req,res)=>{
const{id,status}=req.params
// console.log(id,status);
try {
  const updateGrievance=await grievance.findByIdAndUpdate({_id:id},{status},{new:true})
  console.log("ss",updateGrievance);
  
  res.status(200).json(updateGrievance)
} catch (error) {
  res.status(401).json(error )
}

}