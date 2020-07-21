const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoose.connect('mongodb://localhost/nodereact',{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify:false}).then(()=>{
    console.log('mongodb connected')
})
const routes = require('./routes/routes')
app.use('/app',routes)

app.listen(9000,function() {
    console.log('server started on 9000')
})