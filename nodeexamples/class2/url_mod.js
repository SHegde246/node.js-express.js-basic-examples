//we can create our own server to listen to http req from browser or comm line etc

var url=require("url");

var addr="http://localhost8080/test.html?firstname=pes&lastname=university";

var q=url.parse(addr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata=q.query; //returns an object {firstname:pes,lastname:university}
console.log(qdata.firstname);
console.log(qdata.lastname);

/*
op=
localhost8080
/test.html
?firstname=pes&lastname=university
pes
university
*/