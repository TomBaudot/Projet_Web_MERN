import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNEXION_URL = "mongodb://127.0.0.1:27017/Projet_Web";
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNEXION_URL, { useNewUrlParser: true,useUnifiedTopology:true })
    .then(()=> {
        app.listen(PORT,()=> {
            console.log(`server running on port : ${PORT}`)
        })
    })
    .catch(e => {
        console.error('Connection error', e.message)
    });
mongoose.set('useFindAndModify',false);

const db = mongoose.connection;