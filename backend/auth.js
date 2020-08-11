const {User} = require('./models/user')
const jwt = require('jsonwebtoken')

const auth = async (req,res,next)=>{
    let token = req.cookies.x_auth;
    if (!token) {
        return res.json('You are not eligible to perform this action!')
    }
    const verify = await jwt.verify(token,'JWT_SECRET')
    if (!verify) {
        return res.json('You are not eligible to perform this action!')
    }
        const user = await User.findOne({"_id":verify,"token":token})
            req.token=token
            req.user=user
        next()
}

module.exports = {auth}