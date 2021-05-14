/*  
//NUMBER 1
var http=require("http");
var fs=require("fs");
var url=require("url");

//create a server
http.createServer(function(request,response)
                {
                    //parse the req which contains filename
                    var pathname=url.parse(request.url).pathname;

                    //print the filename
                    console.log("request for " + pathname + " received");

                    //read the requested file content
                    fs.readFile(pathname.substring(1),function(err,data)
                                                    {
                                                        //http status code and content type
                                                        response.writeHead(200,{"Content-Type":"text/html"});

                                                        //write file contents to resp body
                                                        response.write(data.toString());

                                                        //send the response body
                                                        response.end();
                                                    }
                    );
                }
).listen(8081);

console.log("listening to port 8081");
*/

//************************************* 

/*
//NUMBER 2
var http=require("http");
var fs=require("fs");
var url=require("url");

http.createServer(function(request,response)
                {
                    //parse the req which contains filename
                    var pathname=url.parse(request.url).pathname;

                    //print the filename
                    console.log("request for " + pathname + " received");

                    //read the requested file content
                    if(request.method=="GET")
                    {
                    fs.readFile(pathname.substring(1),function(err,data)
                                                    {
                                                        if(err)
                                                        {
                                                            console.log(err);

                                                            //HTTP Status 404 not found
                                                            response.writeHead(404,{"Content-Type":"text/html"});
                                                        }


                                                        else
                                                        {

                                                        //http status code and content type
                                                        response.writeHead(200,{"Content-Type":"text/html"});

                                                        //write file contents to resp body
                                                        response.write(data.toString());
                                                        }

                                                        //send the response body
                                                        response.end();
                                                    
                                                        
                                                    } );  
                    }
                }
).listen(8081);

console.log("listening to port 8081");
*/
//**************************************************


//NUMBER 3
var http=require("http");
var fs=require("fs");
var url=require("url");

http.createServer(function(request,response)
                {
                    //parse the req which contains filename
                    var pathname=url.parse(request.url).pathname;

                    //print the filename
                    console.log("request for " + pathname + " received");

                    
                        let body=[];
                        //fat arrow function
                        request.on("data",(chunk)=>
                        {
                            body.push(chunk);
                        }).on("end",()=>   //no param callback
                        {
                            body=Buffer.concat(body).toString();
                            //body has entire req body stored in it
                            //(in this case, JSON content that's been fetched)
                        });


                        fs.writeFile(pathname.substring(1),body,(err,res)=>
                        {
                            response.writeHead(200, {"Content-Type":"application/json"});
                            response.end();
                        })
                
            }).listen(8081);

console.log("listening to port 8081");
