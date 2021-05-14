/*
//EXAMPLE 1

module.exports=function(app)
{
    var customers=require("./controller.js");

    //create routes

    //create new customer
    app.post("/customers",customers.create);

    //getting all cust
    app.get("/customers",customers.findAll);

    //get a cust based on particular id (:id is property)
    app.get("/customers/:id",customers.findone);

    //update a cust's details
    app.get("/customers/:id",customers.update);

    //delete cust based on id
    app.delete("/customers/:id",customers.delete);
}
*/

//*******************************************

//EXAMPLE 2
//can simplify defining routes
//using Router class

var express=require('express');

var router=express.Router();

router.get('/',function(req,res)
{
    res.send("get request on myroutes");
});

module.exports=router;