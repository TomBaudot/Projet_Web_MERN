import express from 'express';

import {getMovies, createMovie, deleteMovie, likeMovie, dislikeMovie} from "../controllers/movies.js";

const router = express.Router();

router.get('/', getMovies);
router.post('/',createMovie);
router.delete('/:id', deleteMovie);
router.patch('/:id/likeMovie', likeMovie);
router.patch('/:id/dislikeMovie', dislikeMovie);

export default router;