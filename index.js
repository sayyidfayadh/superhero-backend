
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const superHeroServer=express()
const sendMailRoute = require('./Router/router');
const router=require('./Router/router')
require('./DB/Connection')
superHeroServer.use(cors())
superHeroServer.use(express.json())
superHeroServer.use(router)
superHeroServer.use('/upload',express.static('./upload'))
const PORT=process.env.PORT || 3000;
superHeroServer.listen(PORT,()=>{
  console.log(`superHeroServer started running at ${PORT}`);
})

superHeroServer.get('/',(req,res)=>{
  res.status(200).send('<h1 >super hero is ready</h1>')
})
superHeroServer.use('/api', sendMailRoute);