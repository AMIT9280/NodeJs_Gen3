const mongoose = require('mongoose')

const schema = mongoose.Schema

const uploadSchema = schema({

    fileName:{
        type:String  
    },
    fileType:{
        type:String
    },
    fileSize:{
        type:Number
    },
    filePath:{
        type:String
    }
    
},{
    timestamps:true
}
)
module.exports = mongoose.model("upload",uploadSchema)