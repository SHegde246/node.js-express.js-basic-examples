var express=require("express");

var app=express();

app.get("/hello",(req,res)=>
{
    res.send("welcome to learning express!");
});
app.listen(8080);

//node express.js
//go to browser, type localhost:8080/hello

//if we give wrong path, op says-
//Cannot GET /