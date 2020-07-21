const Info = require('../models/user')

module.exports = {
    getAllinfo:async(req,res)=>{
        try{
            const infoo = await Info.find()
            res.send(infoo)
            console.log(infoo)
        }catch(err){
            res.send('Error ' + err)
        }
    },
    getSingleinfo:async(req,res)=>{
        try{
            const infoo = await Info.findById(req.params.id)
            res.json(infoo)
        }catch(err){
            res.send('Error ' + err)
        }
    },
    deleteinfo:async(req,res)=>{
        try {
            const infoo = await Info.findById(req.params.id)
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
            const result = await Info.findByIdAndUpdate(id,data,options)
            res.send(result)
        } catch (error) {
            res.send(error)
        }
    },
    addinfo:async(req,res)=>{
        try {
            const infoo = new Info(req.body)
            const a1= await infoo.save()
            res.send(a1)
        } catch (err) {
            res.send('Error ' + err)
            
        }
    }
}