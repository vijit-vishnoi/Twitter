const express = require ('express');
const connect =require ('./config/database');
const app =express();
const Tweet=require('./models/tweet');

const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment')

app.listen(3000,async()=>{
    console.log('server started');
    await connect(); 
    console.log('Mongo db connected');
    const tweets=await Tweet.find({
        content: ["First tweet","i am good"]
    });
    console.log(tweets);
});

