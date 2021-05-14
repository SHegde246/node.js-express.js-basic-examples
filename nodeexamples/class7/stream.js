/*
//reading the stream
var fs=require("fs");
var data="";  //to store read stream

//create readable stream
//highWaterMark=how much data stream can accommodate
var readablestream=fs.createReadStream("data.txt");

readablestream.setEncoding("utf-8");

//handle events
readablestream.on("data",function(chunk)
{
    data+=chunk;   //take chunk by chunk and append to data 
});

readablestream.on("end",function()
{
    console.log(data);
});

readablestream.on("error",function(err)
{
    console.log(err);
});
*/
//****************************************

/*
//writing into the stream
var fs=require("fs");
var data="new content to be written";  //to store read stream

//create writable stream
//highWaterMark=how much data stream can accommodate
var writestream=fs.createWriteStream("data.txt");

writestream.write(data,"utf-8");

//mark the end of write/eof
writestream.end();


//handle events
writestream.on("finish",function(chunk)
{
    console.log("write stream completed!");
});

writestream.on("error",function(err)
{
    console.log(err);
});
//it overwrites
*/
//****************************************** 


/*
//pipe two streams
//read from one and write it to the other simultaneously
var fs=require("fs");

var readstream=fs.createReadStream("bloo.txt");
var writestream=fs.createWriteStream("blah.txt");

//pipe read and write together
readstream.pipe(writestream);

console.log("piping complete");
*/

//************************************************ 

//chaining the streams
//(zipping and unzipping)

var fs=require("fs");
var zlib=require("zlib");

/*
//compress the file
fs.createReadStream("data2.txt")
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream("data2.txt.gz"));

console.log("data2.txt has been compressed!");
//creates data2.txt.gz, which can't be opened as it is compressed
*/



//decompress the file
fs.createReadStream("data2.txt.gz")
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream("data3.txt"));

console.log("data2.txt has been decompressed!");
