const express=require("express");
const router=express.Router();

const user=require("./model.js");

router.post("/login",(req,res)=>
{
    user.findOne({email:req.body.email},function(err,user)
    {
        if(user==null)
        {
            return res.status(400).send(
                {
                    message: "user not found"
                }
            );
        }
        else
        {
            if(user.validpassword(req.body.password))
            {
                return res.status(201).send(
                    {
                        message: "user logged in"
                    }
                );
            }
            else
            {
                return res.status(400).send(
                    {
                        message: "wrong password"
                    }
                );
            }
        }
    });
});


router.post("/signup",(req,res,next)=>
{
    let newuser=new user();
    newuser.name=req.body.name,
    newuser.email=req.body.email,
    newuser.setpassword(req.body.password);

    //save new obj to db
    newuser.save((err,user)=>
    {
        if(err)
        {
            return res.status(400).send(
                {
                message: "sorry, couldn't add new user"
                }
            );
        }
        else
        {
            return res.status(201).send(
                {
                message: "successfully added new user!"
                }
            );
        }
    });
});

module.exports=router;