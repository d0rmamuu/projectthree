const express = require('express');
const mongoose = require('mongoose');
const comments= require('./routes/api/comments');
const xyz=require('./models/Comment');
require('dotenv').config();

const app = express();
app.use(express.json());

const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


//use routes
app.use('/api/comments',comments); 

//rotes banao
app.delete('/delete/:id',(req,res)=>{
  xyz.findByIdAndDelete(req.params.id,function (err){
    if(err)
    console.log(err);
    else
    console.log("Deleted");
  })
})
//feedbacks adding
app.post('/feedbacks',(req,res)=>{
  const comments=req.body
  xyz.create(comments,(err,data)=>{
    if(err){
      res.status(500).send(err)
    }
    else{
      res.status(201).send(data)
    }
  })
})

//update like part
app.put('/like',(req,res)=>{
  const ilike=req.body.like
  xyz.findByIdAndUpdate(req.body._id,{like:!ilike},(err)=>{
    if(err)
    console.log(err)
    else
    console.log('like variable updated')
    res.send('done')
  })
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
