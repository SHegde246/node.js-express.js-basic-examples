var http=require("http");
var fetch=require("node-fetch");

fetch("http://localhost:8081/data.txt",{
    method:"GET",
    headers:{"Content-Type":"application/zip"}
})
.then(res => console.log(res));