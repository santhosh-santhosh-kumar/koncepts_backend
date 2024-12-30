const express=require("express")
const mail =require('./routes/mail.route.js')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
const PORT=3001

app.use('/mail',mail)
app.listen(3001,()=>{
    console.log("server is on PORT "+PORT)
})