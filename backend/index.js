const express = require('express')
const mongoose = require('mongoose')
const cookieParser= require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()




// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
mongoose.connect('mongodb://localhost/nodereact',{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify:false}).then(()=>{
    console.log('mongodb connected')
})
const routes = require('./routes/routes')
app.use('/app',routes)

app.listen(9000,function() {
    console.log('server started on 9000')
})