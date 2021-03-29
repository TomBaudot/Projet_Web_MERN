import express from 'express';

import {getShows, createShow, deleteShow, likeShow, dislikeShow} from "../controllers/shows.js";


import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/', getShows);
router.post('/', auth, createShow);
router.delete('/:id', auth, deleteShow);
router.patch('/:id/likeShow', auth, likeShow);
router.patch('/:id/dislikeShow', auth, dislikeShow);

export default router;