const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
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
    }
})

const User = mongoose.model('User',UserSchema)
module.exports = {User}