import express from 'express';

import {getMovies, createMovie, deleteMovie, likeMovie, dislikeMovie, updateMovie} from "../controllers/movies.js";


import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/', getMovies);
router.post('/add', auth, createMovie);
router.delete('/:id', auth, deleteMovie);
router.patch('/:id/likeMovie', auth, likeMovie);
router.patch('/:id/dislikeMovie', auth, dislikeMovie);
router.patch('/:id/updateMovie', auth, updateMovie);

export default router;