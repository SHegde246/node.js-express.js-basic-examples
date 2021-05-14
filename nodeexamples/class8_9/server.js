/*

//EXAMPLE 1

var express=require("express");

var app=express();

//third party middleware
var bodyparser=require("body-parser");
app.use(bodyparser.json())

require("./routes.js")(app);

//create a server
var server=app.listen(8081,function()
{
    var host=server.address().address;
    var port=server.address().port;
    console.log("my app is listening to http://%s:%s",host,port);
});
*/

//**************************************

//EXAMPLE 2
//using router class

var express=require("express");

var app=express();

var myroutes=require('./routes');

app.use('./routes',myroutes);  //middleware function

app.listen(8080);
