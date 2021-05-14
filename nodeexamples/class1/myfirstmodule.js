//module.exports exports obj/literals/func etc globally

//*************************************************
/*
module.exports.mydatetime=function(){
    return Date();
    }
*/

//***************************************************

module.exports=function(fn,ln)
{
	this.fn=fn;
	this.ln=ln;
	this.fullname=function()
		{
			return this.fn + ' ' + this.ln;
		}
}

//can do function person(fn,ln)--- and at end, module.exports=person 
