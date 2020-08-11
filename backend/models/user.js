const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    },
    bio:{
        type:String
    },
    location:{
        type:String
    },
    phone:{
        type:Number
    },
    image:{
        type:String
    },
    products:[{type:mongoose.Schema.Types.ObjectId,
    ref:'Product'}]
})

const User = mongoose.model('User',UserSchema)
module.exports = {User}