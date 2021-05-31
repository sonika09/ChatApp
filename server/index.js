require('dotenv/config');
const express=require('express');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const {verify}= require('jsonwebtoken');
const {hash,compare}=require('bcryptjs');

//step
//register a user
//login a user
//logout a user
//setup a protected route
//get a new access token with a refreshtoken

const server= express();


//use express middleware for easier cookie handling
server.use(cookieParser());
server.use(
    cors({
        origin:'http://localhost:3000',
        credentials:true,
    })
)
//need to be able to read body data
server.use(express.json()); //to support json encoded bodies
server.use(express.urlencoded({extended:true}));//support url encoded bodies
server.listen(process.env.PORT,()=>
    console.log(`server listening on port ${process.env.PORT}`)
);

//register a user 
server.post('/register',async(req,res)=>{
    const {email,password}=req.body;

try{
    //check if user exists
    const hashedPassword =await hash(password,10);
    console.log(hashedPassword);

}
catch(err){

}

})
