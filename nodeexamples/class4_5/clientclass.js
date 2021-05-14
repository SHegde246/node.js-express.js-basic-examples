/*
//IF
//as there are no documents in the db yet, should return []

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

//****************************** 


//ELSE
//we added document to the db. Therefore, refreshing it would show it   
var http=require("http");

//npm install node-fetch
var fetch=require("node-fetch");

fetch("http://localhost:8081/sample.json",{
    method:"POST",
    body:JSON.stringify({"name":"sneha","col":"pes"}),
    headers:{"Content-Type":"application/json"}
})
//.then(res=>res.json())
.then(res=>console.log(res));