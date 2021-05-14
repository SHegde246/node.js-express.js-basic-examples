//creating web client


/*
//NUMBER 1
var http=require("http");

//options to be created
var options=
{
    host: "localhost",
    port:"8081",
    path:"./pes.html"
};

//callback function
var callback=function(response)
{
    var body="";
    response.on("data",function(data)
                    {
                        body+=data;
                    }
    );  //binds event with event handler

    response.on("end",function()
                    {
                        //when data received completely
                        console.log(body);
                    }
    );
}


//make req to server
var req=http.request(options,callback);   //primitive method
req.end();
*/

//********************************************

/*
//NUMBER 2
//we see the json file as an op
var http=require("http");

//npm install node-fetch
var fetch=require("node-fetch");

fetch("http://localhost:8081/sample.json",{
    method:"GET",
    headers:{"Content-Type":"application/json"}
})
.then(res=>res.json())
.then(res=>console.log(res));
*/

//*******************************************

//NUMBER 3 using post
//have to update json file thr client req. server fetches and updates
var http=require("http");

//npm install node-fetch
var fetch=require("node-fetch");

fetch("http://localhost:8081/sample.json",{
    method:"POST",
    body: JSON.stringify({"name":"sneha modified value","col":"pes"}),
    headers:{"Content-Type":"application/json"}
})
.then(res=>console.log(res));