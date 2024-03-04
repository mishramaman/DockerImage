const express=require("express");
const app=express();

app.get("/",(req,res)=>(
 res.json([
    {
        id:1,
        name:"Aman Mishra",
        age:23
    },
    
    {
        id:2,
        name:"Arpit Shankhdhar",
        age:24
    },
    
    {
        id:3,
        name:"Tanuj Yadav",
        age:34
    }
 ])   

));

app.listen(5500,()=>(
    console.log("App is running")
))