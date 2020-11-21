const express=require('express')
const app=express()
const Passport=require('passport')
const GooglePass=require('passport-google-oauth20').Strategy;
Passport.use(new GooglePass());

app.get("/",(req,res)=>{
    res.send({hi:"good to see you"})
})

//const PORT= process.env.PORT || 5000
app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });



