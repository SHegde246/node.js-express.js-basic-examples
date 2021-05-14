var url=require("url");
var http=require("http");
var fs=require("fs");
var zlib=require("zlib");

http.createServer(function(request,response)
{
    var pathname=url.parse(request.url).pathname;

    console.log("Request for" + pathname + "is received");

    if(request.method=="GET")
    {
        fs.readFile(pathname.substr(1),function(err,data)
        {
            fs.createReadStream("data.txt")
            .pipe(zlib.createGzip())
            .pipe(fs.createWriteStream("data.txt.gz"));

            console.log("File is compressed");

            response.writeHead(200, {"Content-Type":"application/zip"});
            response.write(data);

            response.end();
        });
    }
}).listen(3000);

console.log("Server listening at port 3000");


//node HTTPserver.js in terminal
//localhost:3000/data.txt in browser leads to a zipped data.txt file being downloaded
//if not zipped, would have to transfer larger file