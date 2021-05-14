var customers=
{
    customer1:
    {
        firstname:"sneha",
        lastname:"hegde",
        age:19,
        id:1
    },
    customer2:
    {
        firstname:"siri",
        lastname:"hegde",
        age:14,
        id:2
    },
    customer3:
    {
        firstname:"meera",
        lastname:"hegde",
        age:47,
        id:3
    },
    customer4:
    {
        firstname:"girish",
        lastname:"hegde",
        age:48,
        id:4
    },
}

//create function
exports.create=function(req,res)
{
    var newcustomer=req.body;
    customers["customer" + newcustomer.id]=newcustomer;
    console.log("Customer created! After post method, customers are:\n" +
                JSON.stringify(customers,null,4));
    res.end("post call in create is successful:\n" + JSON.stringify(newcustomer,null,4));
};

//finAll function
exports.findAll=function(req,res)
{
    console.log("The customers are:\n" +
                JSON.stringify(customers,null,4));
                res.end("get call in findAll is successful:\n" + JSON.stringify(customers,null,4));
};

//findone function
exports.findone=function(req,res)
{
    var customer=customers["customer" + req.params.id];
    console.log("The customer, based on id is:\n" +
                JSON.stringify(customer,null,4));
                res.end("get call in findone is successful:\n" + JSON.stringify(customer,null,4));
};

//update function
exports.update=function(req,res)
{
    var id=parseInt(req.params.id);
    var updatecustomer=req.body;
    if(customers["customer" + id] != null)
    {
        //update the corresponding id of the cust
        customers["customer" + id] = updatecustomer;
        console.log("update is done, customers are:\n" +
                    JSON.stringify(customers,null,4));
        res.end("put call in update is successful:\n" + JSON.stringify(updatecustomer,null,4));

    }
    else
    {
        res.end("No such customer exists\n" + JSON.stringify(updatecustomer,null,4));
    }
};

//delete function
exports.delete=function(req,res)
{
    var deletecustomer=customers["customer" + req.params.id];
    delete customers["customer" + req.params.id];
    console.log("After deletion, customers are:\n" +
                JSON.stringify(customers,null,4));
    res.end("delete call in delete is successful\n" + JSON.stringify(deletecustomer,null,4));
};

//start the server in terminal
//give different routes in browser 
//localhost:8081/route