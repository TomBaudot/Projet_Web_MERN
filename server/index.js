import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import movieRoutes from './routes/movies.js';
import userRoutes from './routes/users.js';
import showRoutes from './routes/shows.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/movies',movieRoutes);
app.use('/user', userRoutes);
app.use('/shows',showRoutes);

const CONNECTION_URL = 'mongodb://127.0.0.1:27017/Projet_Web';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);