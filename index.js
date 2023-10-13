const express=require("express")
const app=express();
const Router=require("./Router/Blog")
const User = require("./Router/User");
app.use("/api/main",Router)
app.use("/api/main",User)
app.listen(6001,()=>{
    try{  
        console.log('server is running.....')
    }
      catch(err){
          console.log('Error Found',err)
     }
  })
  