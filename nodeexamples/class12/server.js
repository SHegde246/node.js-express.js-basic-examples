var express=require("express");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");

var app=express();

var mongo_url="mongodb://localhost:27017/pes";

mongoose.connect(mongo_url);

mongoose.connection.on("connected",()=>
{
    console.log("successfully connected to mongodb at port 27017");
});

app.use(bodyparser.json());

const user=require("./route.js");

app.use("/api",user);

const port = 8080;
app.listen(port,()=>
{
    console.log("server is running on port" + port);
});