const { Schema } = require("mongoose")
const mongoose=require("mongoose")
const grievanceSchema=new mongoose.Schema({
name:{
  type:String,
  default:"anonymous"
},
email:{
  type:String,
  required:true
},
address:{
  type:String,
  required:true
}
,
type:{
  type:String,
  required:true
},
status: {
  type: String,
  enum: ['Pending', 'Resolved', 'Rejected', 'Passed to GCPD'],
  default: 'Pending',
},
message:{
  type:String,
  required:true
},
evidence:{
  type:[String],
  required:true
},
userId: {
  type: Schema.Types.ObjectId,
  ref: 'user',
  required: true,
},
createdAt: {
  type: Date,
  default: Date.now,
},
updatedAt: {
  type: Date,
  default: Date.now,
},

},
{
  timestamps: true, 
}
)
const grievance=mongoose.model("grievance",grievanceSchema)
module.exports=grievance