/*
//READING A FILE
var fs= require("fs");

fs.readFile('test.txt',function(err,data)
{
    if(err)
    {
        throw err;
    }
    console.log(data.toString());
});
*/

//fs.readFileSync('data.txt','utf-8');

//************************************************************************

/*
//WRITING INTO A FILE
//overwrites file
var fs= require("fs");
console.log("going to write in file");
fs.writeFile('test.txt','pes',function(err)
{
    if(err)
    {
        throw err;
    }
    console.log("data written successfully");
    fs.readFile("test.txt",function(err,data)
    {
        console.log(data.toString());
    }
);

});
*/

//*****************************************************************************

//use truncate
var fs=require("fs");

fs.open("test.txt","r+",function(err,fd)
{
    if(err)
    {
        return console.log(err);
    }
    //it crosses out Buffer as this way of creating buffer has been deprecated
    //var buffr=new Buffer()

    //alloc size to buffer in this way
    var buffr=new Buffer.alloc(1000);
    console.log("opened");

    //truncate file after 7 bytes
    fs.ftruncate(fd,7,function(err)
    {
        if(err)
        {
            throw err;
        }
        console.log("truncated");
    }
    
    );

    //read trunc file
    fs.read(fd,buffr,0,buffr.length,0,function(err,bytes)
                                    {
                                        if(err)
                                        {
                                            throw err;
                                        }
                                        if(bytes>0)
                                        {
                                            //print only read bytes to avoid junk
                                            console.log(buffr.slice(0,bytes).toString());
                                        }
                                    });
                                    //close file
                                    fs.close(fd,function(err)
                                            {
                                                    if(err)
                                                    {
                                                        throw err;
                                                    }
                                            }
                                    );
    

});


//deletes the file
fs.unlink("test.txt",function(err)
            {
                if(err)
                {
                    throw err;
                }
            }
);