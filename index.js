const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    console.log("hello ")
    console.log("never say never")
    res.send({hi:"good to see you"})
})

const PORT= process.env.PORT || 5000
app.listen(PORT)



