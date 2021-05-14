const express=require("express");
var app=express();
const path=require("path");


//serve the static files

var options=
{
    //creating headers here
    setHeaders: function(res,path,stat)
    {
        //any other header as part of response can be given here
        res.set(
            {
                "timestamp": Date.now(),
                "name": "sneha",
                "Cache-Control": (path.includes("index.html")) ? "no-store" : "public, max-age=3600000"
            }
        );
    }
}

        //serves the static files
        app.use(express.static(path.join(__dirname,"public/js"),options));

        app.get("/",(req,res)=>
        {
            res.sendFile(path.join(__dirname,"public","index.html"));
        });

        app.listen(3000,()=>
        {
            console.log("server listening to port 3000");
        });