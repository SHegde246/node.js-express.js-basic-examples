var cluster=require("cluster");
var http=require("http");

if(cluster.isMaster)
{
    //have to fork and create worker processes
    //has to be threshold on no of worker proc

    //only create req no of workers
    var numworkers=require("os").cpus().length;
    console.log("master cluster is getting set up " + numworkers + " workers...");
    
    for(var i=0;i<numworkers;i++)
    {
        cluster.fork(); //don't need child proc module for this
    }

    cluster.on("online",function(worker)
    {
        console.log("worker " + worker.process.pid + " is online now");

    });

    //when child proc dies
    cluster.on("exit",function(worker,code,signal)
    {
        console.log("worker " + worker.process.id + " died with code " + code + "and signal " + signal);
        console.log("start a new worker");
        cluster.fork();
    })
}

else    //if worker proc
{
    http.createServer(function(req,res)
    {
        res.writeHead(200);
        res.end("process " + process.pid + " says hi to web tech");
        console.log("process " + process.pid + " handled the request");

    }).listen(8080);
}


//exec this code, go to localhost:8080 in browser
/*
master cluster is getting set up 8 workers...
worker 18972 is online now
worker 30432 is online now
worker 5204 is online now
worker 26896 is online now
worker 28684 is online now
worker 30772 is online now
worker 1696 is online now
worker 5212 is online now
process 5212 handled the request
process 5212 handled the request

*/