/*
var buf=Buffer.alloc(100); //(size,fill,encoding)
//can also do allocUnsafe(). won't have fill
//Unsafe also encrypts

//alloc takes longer, as it has to fill
//console.log(buf.length);


for(var i=0;i<26;i++)
{
    buf[i]=i+97;
}

//default=utf-8
console.log(buf.toString("ascii"));
console.log(buf.toString("ascii",0,7));
console.log(buf.toString("utf-8",0,9));
console.log(buf.toString(undefined,0,5));
*/
/*
op=
abcdefghijklmnopqrstuvwxyz
abcdefg  
abcdefghi
abcde    
*/


//********************************************
/*
var buf=Buffer.allocUnsafe(10);
//len=buf.write("HELLO!");
//console.log(len);
console.log(buf.toString());
//op = 0��H (encrypted junk val) 
*/

/*
var buf=Buffer.alloc(10);
len=buf.write("HELLO!");
console.log(len);
console.log(buf.toString());
*/
 
//*********************************************


//comparing two buffers
/*
var buf1=Buffer.alloc(20, "hi! welcome!");
var buf2=Buffer.alloc(30, "hi! welcome!");
*/
//it will try to fill the entire buffer, all the bytes
//hence, it'll start repeating the string until the buf is full


//var result=buf1.compare(buf2);
/*
if(result<0)
{
    console.log(buf1 + " comes before " + buf2);
}
else if(result===0)
{
    console.log(buf1 + " is equal to " + buf2);
}
else
{
    console.log(buf1 + " comes after " + buf2);
}
*/

//************************* 

var buf3=Buffer.alloc(20);
var buf4=Buffer.alloc(20);
buf4.write("umbrella");
buf3.write("snowman");
var result=buf3.compare(buf4);

if(result<0)
{
    console.log(buf3 + " comes before " + buf4);
}
else if(result===0)
{
    console.log(buf3 + " is equal to " + buf4);
}
else
{
    console.log(buf3 + " comes after " + buf4);
}


//******************************************* 

/*
//copying from one buffer to another
var buf2=Buffer.alloc(20, "hi! welcome!");
var buf3=Buffer.alloc(25);
console.log(buf3.toString());
buf2.copy(buf3);
console.log("buf2 copied to buf3");
console.log(buf3.toString());
*/

//************************************************ 

/*
//concatenating two buffers

var buf1=Buffer.alloc(20, "hello");
var buf2=Buffer.alloc(10, "hi! welcome!");

var totallength=buf1.length + buf2.length; //size = 20+10=30
var buf3=Buffer.concat([buf1,buf2],totallength); //ret new buffer

console.log(buf3.toString());
console.log(buf3.length);
*/

/*
op=
hellohellohellohellohi! welcom
30
*/