var mongoose = require('mongoose');
var records = mongoose.Schema(
    {
        name:{  
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        mobile:{
            type:Number,
            required:true
        }
    }
);
module.exports = mongoose.model('records',records);