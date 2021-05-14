const {fork}=require("child_process");
const forked=fork("forkchild.js");

forked.on("message",(msg)=>
{
    console.log("message from child",msg);
});

forked.send({"hello":"world"});

//exec parent in terminal

/*
message from parent { hello: 'world' }
message from child { counter: 0 }
message from child { counter: 1 }
message from child { counter: 2 }
message from child { counter: 3 }
message from child { counter: 4 }
message from child { counter: 5 }
message from child { counter: 6 }
message from child { counter: 7 }
message from child { counter: 8 }
...
...
...
*/