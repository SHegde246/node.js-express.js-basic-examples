const mongoose=require("mongoose"); //npm install mongoose


//third party module. don't have to npm install
//not recommended as third party can inject malicious sw
//go with in-built modules
//var crypto=require(bcrypt);

var crypto=require("crypto");
//const { stringify } = require("querystring");

const userschema=mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },

    hash: String,
    salt: String  //unique salt key
    //combine salt with user pwd to create hash for strong encryption
});

userschema.methods.setpassword=function(password)
{
    //create random salt key
    //64 bytes encryption
    this.salt=crypto.randomBytes(16).toString("hex");
    this.hash=crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString("hex");
};


userschema.methods.validpassword=function(password)
{
    var hash=crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString("hex");
    return this.hash==hash;
}

const user=module.exports=mongoose.model("user",userschema);