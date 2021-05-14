process.on("message",(msg)=>
{
    console.log("message from parent",msg);
});

let counter=0;

setInterval(()=>
{
    //send info to parent every one second
    process.send({counter: counter++});
},1000);