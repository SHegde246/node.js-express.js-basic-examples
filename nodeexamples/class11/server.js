//express looks for template in view directory by default

var express=require("express");
var app=express();

//setting the view engine and template views path
app.set("view engine","pug");
app.set('views','./views');

app.get('/',function(req,res)
{
    res.render('index',{
        name : "sneha",
        url : "http://www.google.com"
    });
});

var server=app.listen(8080,function()
{
    console.log("server running at 8080");
});
