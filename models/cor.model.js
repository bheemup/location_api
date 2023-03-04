const mongoose =require("mongoose");

const corSchema = mongoose.Schema({
    longitude:{
         type:Number,
         require:true
    },
    latitude:{
        type:Number,
        require:true
    }
})
corSchema.index({location:"2dsphere"})
module.exports =mongoose.model("CORDINATION",corSchema)