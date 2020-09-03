const express= require('express');
const app=express();
const mongoose=require('mongoose');
const User=require('./user')
mongoose.connect("mongodb+srv://Avenger:Minabala123@cluster0.7iov3.mongodb.net/Ashish?retryWrites=true&w=majority",
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:true});

    mongoose.connection.once('open',()=>{
        try{
            console.log('Database connected');
        }catch(error){
            console.log('error');
        }});

   app.get('/users',function(req,res){
    try{
    const data = User.find().exec()
         res.send(data)}
         catch(error){
             res.send(error)
         }
     })
   app.listen(4000,()=>{
       console.log('server is running on the port 4000')
    

   })




