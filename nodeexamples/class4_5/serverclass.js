var http=require("http");
var fs=require("fs");
var url=require("url");

//can req a particular class from a module with .
//(do npm install mongodb)
var MongoClient=require("mongodb").MongoClient;


http.createServer(function(request,response)
                {
                    //parse the req which contains filename
                    var pathname=url.parse(request.url).pathname;

                    //print the filename
                    console.log("request for " + pathname + " received");

                    //read the requested file content
                    if(request.method=="GET")
                    {
                        console.log("Executing Mongo");
                        MongoClient.connect("mongodb://localhost:27017",
                        {useUnifiedTopology:true},
                        function(err,client)
                        {
                            console.log("Connnected to server!");
                            const db=client.db("pes");
                            
                            //find is like sql select
                            db.collection("student").find({}).toArray(
                                function(err,docs)
                                {
                                    response.writeHead(200, {"Content-Type":"application/json"});
                                    response.write(JSON.stringify(docs));
                                    client.close();
                                    response.end();
                                }
                            );
                        }
                        );
                    }
                    else  //if post method
                    {
                        let body=[];
                        request.on("data",(chunk)=>
                        {
                            body.push(chunk);
                        }).on("end",()=>
                        {
                            body=Buffer.concat(body).toString();
                        });


                        console.log("Executing Mongo");
                        MongoClient.connect("mongodb://localhost:27017",
                        {useUnifiedTopology:true},
                        function(err,client)
                        {
                            console.log("Connnected to server!");
                            const db=client.db("pes");
                            
                            //find is like sql select
                            db.collection("student").insertOne(JSON.parse(body)).then(r=>
                                {
                                    response.writeHead(200, {"Content-Type":"application/json"});
                                    client.close();
                                    response.end();
                                });
                        });  
                    }
                }
).listen(8081);

console.log("listening to port 8081");