const {User}= require('../models/user')
const bcrype = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports = {
    userRegister:async(req,res)=>{

        try{
            const {name,email,password} = req.body
            const p = await bcrype.hash(password,12)
            const user = new User({name,email,password:p})
            const userdata = await user.save()
            res.json({success:true,userdata,message:"User Created successfully"})
        }
        catch(err){
            res.json({success:false,err})
        }
    },
    userlogin:async(req,res)=>{
        const {password} = req.body
        try {
            const user = await User.findOne({email:req.body.email})
            if (user) {
                const compare = await bcrype.compare(password,user.password)
                if (compare) {
                    const token = jwt.sign({_id:user._id},'JWT_SECRET')
                    user.token=token
                    res.cookie("x_auth",user.token)
                    const userdata = await user.save()
                    
                    res.json({success:true,message:"you are logged in",userdata:userdata,token})
                }
                else{
                    res.json({success:false,message:"Invalid Crediantials"})

                }
            }
            else{
                res.json({success:false,message:"User does not exists"})

            }
        } 
        catch (err) {
            res.json({success:false,err})
            
        }
    },
    logout:async(req,res,next)=>{
        try {
            const user = await User.findByIdAndUpdate({_id:req.user._id},{token:""})
            if (!user) {
                return res.send("falied")
            }
            res.clearCookie("x_auth");
            res.json({success:true})
            console.log(req.user)
        } catch (error) {
            res.send(error)
        }
    },
    getAllinfo:async(req,res,next)=>{
        console.log(req.user)

        try{

            const infoo = await User.find()


            res.send(infoo)
        }catch(err){
            res.send('Error ' + err)
        }
    },
    getSingleinfo:async(req,res)=>{
        try{
            const infoo = await User.findById(req.params.id)
            res.json(infoo)
        }catch(err){
            res.send('Error ' + err)
        }
    },
    deleteinfo:async(req,res)=>{
        try {
            const infoo = await User.findById(req.params.id)
            const a1 = await infoo.remove()
            res.send('success')
        } catch (err) {
            res.send('error' + err)
        }
    },
    updateinfo:async(req,res)=>{
        try {
            const id = req.params.id
            const data = req.body
            const options = {new:true}
            const result = await User.findByIdAndUpdate(id,data,options)
            res.send(result)
        } catch (error) {
            res.send(error)
        }
    },
    addinfo:async(req,res)=>{
        try {
            const infoo = new User(req.body)
            const a1= await infoo.save()
            res.send(a1)
        } catch (err) {
            res.send('Error ' + err)
            
        }
    }
}