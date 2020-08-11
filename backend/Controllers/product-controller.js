const {Product}= require('../models/products')

module.exports = {
    getAllinfo:async(req,res,next)=>{
        console.log(req.user)

        try{

            const infoo = await User.find()


            res.send(infoo)
        }catch(err){
            res.send('Error ' + err)
        }
    },
    getSingleuser:async(req,res)=>{
        try{
            const user = await User.findById(req.params.id)
            res.json(user)
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
    updateproduct:async(req,res)=>{
        try {
            const id = req.params.id
            console.log(id)
            const data = {title:req.body.title,description:req.body.description,price:req.body.price,image:req.body.image}
            const options = {new:true}



            if (req.body.owner == req.user._id) {
                const product = await Product.findByIdAndUpdate(id,data,options)
                return res.json({productdata:product,message:"Updated",success:true})
            }
            else{
                console.log("jjj")
                res.send("failed")
            }
           
        } catch (error) {
            res.send(error)
        }
    },
    addproduct:async(req,res)=>{
        try {
            const pdt = {
                title:req.body.title,
                description:req.body.description,
                image:req.body.image,
                price:req.body.price,
                owner:req.user

            }
            const product = new Product(pdt)
            const productdata= await product.save()
            const user = req.user
            user.products.push(product)
            await user.save()
            res.json({success:true,data:productdata,message:"Product created successfully"})
        } catch (err) {
            res.send('Error ' + err)
            
        }
    }
}