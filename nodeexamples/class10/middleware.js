
var express=require("express");
var app=express();


//middleware func
var requesttime=function(req,res,next)
{
    req.requestTime=Date.now();
    next();  //to make sure no endless req res cycle
}

//to use midd func
app.use(requesttime);

app.get('/',function(req,res)
{
    var responseText="hello, guys\n";
    responseText +="The client is requesting at: " + req.requestTime;
    res.end(responseText);
});

app.listen(8080);


//********************************************* 


/*
//router middleware func

var express=require("express");
var app=express();

//create router middleware funcs
var router=express.Router();
router.use(function(req,res,next)
{
    console.log("/", + req.method);
    next();
});

router.use("/user/:id",function(req,res,next)
{
    console.log(req.params.id);
    if(req.params.id==0)
    {
        res.json({"message":"provide a different name"});
    }
    else
    {
        next();
    }
});


//define all routes
router.get("/",function(req,res)
{
    res.json({"message":"welcome to pes"});
});

router.get("/user/:id",function(req,res)
{
    res.json({"message":"welcome to pes"+req.params.id});
});

//tell the app to use the router with /pes
app.use("/pes",router);

app.listen(8081,function()
{
    console.log("server running at port 8081");
});
*/

//***************************************************


/*
//npm install cookie-parser

var express=require("express");
var cookieParser=require("cookie-parser");
var app=express();

app.use(cookieParser());

app.get("/setcookie",function(req,res)
{
    res.cookie("username","SnehaHegde",{maxAge:1000000,httpOnly:true});
    return res.send("cookie is set");
});

app.get("/getcookie",function(req,res)
{
    var username=req.cookies["username"];
    if(username)
    {
        return res.send(username);
    }
    res.send("no cookie found");
});

app.listen(3000);
*/
