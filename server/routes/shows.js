import express from 'express';

import {getShows, createShow, deleteShow, likeShow, dislikeShow,updateShow} from "../controllers/shows.js";


import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/', getShows);
router.post('/add', auth, createShow);
router.delete('/:id', auth, deleteShow);
router.patch('/:id/likeShow', auth, likeShow);
router.patch('/:id/dislikeShow', auth, dislikeShow);
router.patch('/:id/updateShow', auth, updateShow);

export default router;