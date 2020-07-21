const {User}= require('../models/user')

module.exports = {
    userRegister:async(req,res)=>{
        try{
            const user = new User(req.body)
            const userdata = await user.save()
            res.json({success:true,userdata,message:"User Created successfully"})
        }
        catch(err){
            res.json({success:false,err})
        }
    },
    getAllinfo:async(req,res)=>{
        try{
            const infoo = await User.find()
            res.send(infoo)
            console.log(infoo)
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