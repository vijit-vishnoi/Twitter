import express from 'express'
import {connect} from './config/database.js'
import bodyParser from 'body-parser';

import apiRoutes from './routes/index.js';

const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiRoutes); 


import service from './services/tweet-service.js'

app.listen(3000,async()=>{
    console.log('server started');
    await connect(); 
    console.log('Mongo db connected');
    
});

