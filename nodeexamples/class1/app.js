//blocking

/*
var fs=require('fs');  //to include module and its components
var data=fs.readFileSync('test.txt'); //if not Sync, need to specify callback func for async
console.log(data.toString());
console.log('End here');
*/

//will only process the end here statement after the previous statements exec

//***************************************************

//non blocking

/*
var fs=require('fs');
var data=fs.readFile('test.txt', function(err,data)
				{
					if(err)
					{
					console.error(err);
					}
					console.log(data.toString());
				}); 

console.log('Start here');
*/

//when it goes to readFile, and starts reading, fetches and exec next comm, ie, start here
//therefore, start here exec first, while it waits for file operation to happen

//********************************************* 

/*
npm init - initialises proj for work
will ask for a bunch of detail, and when done, will ask if it's okay
when sel yes, package.json gets created

after that, do npm install <module>
(in this case, chalk)
node_modules folder gets created, too
all the inst modules there. chalk is there.
has been inst locally to the appl
*/

/*
inst globally?
npm install -g <module>
gets inst in D:\WT\nodejs\node_modules\npm\node_modules
therefore, global
can be used in all appl
*/

/*
package-lock.json-
has details of all inst packages
*/

//****************************************************

//how to incl own module?
/*
var datetime=require('./myfirstmodule.js');
console.log(datetime.mydatetime());
*/
//will import myfirstmodule and prints date and time

//****************************************************

/*
var person=require('./myfirstmodule.js');
var person1=new person('Sneha','Hegde');
console.log(person1.fullname());
*/

//****************************************************

//module caching
//when we require a module, will be cached
//therefore, if we require it again using a different variable, it'll still point to the same instance, and won't point to a new one

/*
counter1=require('./counter.js');
counter2=require('./counter.js');

counter1.increment();
counter1.increment();

console.log(counter1.total());
console.log(counter2.total());
*/

//we are calling incr through counter1. but since counter 1 and 2 both point to same instance in cache, therefore, changes get reflected when we call through counter2, too
//therefore, we get 2 2 instead of 2 0

//to not have this, we can clear cache before incl again
//or we can give different path


