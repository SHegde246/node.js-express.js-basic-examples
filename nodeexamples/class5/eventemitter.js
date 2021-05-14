//import events module
var events=require("events");

//create eventEmitter object
var eventEmitter=new events.EventEmitter();

//create event handler
var handler=function connected()
{
    console.log("connection successful");
}

eventEmitter.on("connection",handler);
eventEmitter.on("received_data",function()
{
    console.log("received the data");
});

//fire the event
eventEmitter.emit("connection");
eventEmitter.emit("received_data");