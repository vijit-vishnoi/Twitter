import express from 'express'
import {connect} from './config/database.js'
import bodyParser from 'body-parser';
import passport from 'passport';

import {passportAuth} from './config/jwt-middleware.js';
import apiRoutes from './routes/index.js';
import { UserRepository,TweetRepository } from './repository/index.js';
import LikeService from './services/like-service.js';

const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize()); 
passportAuth(passport);
app.use('/api',apiRoutes);


app.listen(3000,async()=>{
    console.log('server started');
    await connect(); 
    console.log('Mongo db connected');

    // const userRepo=new UserRepository();
    // const tweetRepo=new TweetRepository();
    // const tweets=await tweetRepo.getAll(0,10);
    // const users=await userRepo.getAll();
    // const likeService=new LikeService();
    // await likeService.toggleLike(tweets[0].id,'Tweet',users[0].id)
});

