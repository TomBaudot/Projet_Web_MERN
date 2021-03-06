import express from 'express';
import mongoose from 'mongoose';
import MovieMessage from "../models/movie.js";

const router = express.Router();

export const getMovies = async (req, res) =>{
    try {
        const movieMessages = await MovieMessage.find();

        res.status(200).json(movieMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createMovie = async (req, res) => {
    const param = req.body;

    const newMovie = new MovieMessage(param)

    try {
        await newMovie.save();

        res.status(201).json(newMovie );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deleteMovie = async (req,res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);
    
    await MovieMessage.findByIdAndRemove(_id);
    res.json({ message:"Movie deleted"});
};

export const likeMovie = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    const movie = await MovieMessage.findById(_id);

    const updatedMovie = await MovieMessage.findByIdAndUpdate(_id, { likeCount: movie.likeCount + 1 }, { new: true });

    res.json(updatedMovie);
};

export const dislikeMovie = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    const movie = await MovieMessage.findById(_id);

    const updatedMovie = await MovieMessage.findByIdAndUpdate(_id, { dislikeCount: movie.dislikeCount + 1 }, { new: true });

    res.json(updatedMovie);
};

export default router;