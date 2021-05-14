const fs=require("fs");
const child_process=require("child_process");
var workerprocess=child_process.exec("node forkchildexec.js",function(stderr,stdout)
{
    console.log("worker proc created succ!");
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
});

//op
/*
worker proc created succ!       
stdout: hello! In forkchildexec!

stderr: null
*/