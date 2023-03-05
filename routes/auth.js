const express =require("express");
const router = express.Router();
const cordination= require("../models/cor.model")

router.get("/",async(req,res)=>{
    const data =await cordination.find();
   return   res.json({data:data})
})


router.post("/upload",async(req,res)=>{
        const {longitude,latitude}= req.body;
       
        const isLatitude = ()=>{
        return  latitude <=90 && latitude >=-90
        }
        const isLongitude = () => {
          return  longitude <=180 && longitude >=-180
        }

        if(!longitude || !latitude || !isLongitude() || !isLatitude()){
          res.json({message:"please fill all details",status:400})
        }else{
          const newCordination = new cordination({
        longitude,latitude
       })
       await newCordination.save().then(()=>{
      return res.json({msg:"data is saved successfully",status:201})
       }).catch((err)=>{
        res.json({msg:err,status:500})
       })   
        }
      
 
})

module.exports =router;