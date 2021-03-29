import express from 'express';

import {getMovies, createMovie, deleteMovie, likeMovie, dislikeMovie} from "../controllers/movies.js";


import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/', getMovies);
router.post('/', auth, createMovie);
router.delete('/:id', auth, deleteMovie);
router.patch('/:id/likeMovie', auth, likeMovie);
router.patch('/:id/dislikeMovie', auth, dislikeMovie);

export default router;