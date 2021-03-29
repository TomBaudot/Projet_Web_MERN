import express from 'express';
import mongoose from 'mongoose';
import ShowMessage from "../models/show.js";

const router = express.Router();

export const getShows = async (req, res) =>{
    try {
        const showMessages = await ShowMessage.find();
        res.status(200).json(showMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createShow = async (req, res) => {
    const param = req.body;

    const newShow = new ShowMessage({...param, creator:req.userId, createdAt:new Date().toISOString()})
    try {
        await newShow.save();

        res.status(201).json(newShow );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deleteShow = async (req,res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    await ShowMessage.findByIdAndRemove(_id);
    res.json({ message:"Show deleted"});
};

export const likeShow = async (req, res) => {
    const { id: _id } = req.params;

    if(!req.userId) return res.json({message: "Unauthenticated"})

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    const show = await ShowMessage.findById(_id);

    const index = show.likes.findIndex((_id) => _id === String(req.userId));

    if(index === -1) {
        show.likes.push(req.userId)
    }

    else {
        show.likes = show.likes.filter((_id) => !(_id === String(req.userId)) );
    }

    const updatedShow = await ShowMessage.findByIdAndUpdate(_id, show, { new: true });

    res.json(updatedShow);
};

export const dislikeShow = async (req, res) => {
    const { id: _id } = req.params;

    if(!req.userId) return res.json({message: "Unauthenticated"})

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    const show = await ShowMessage.findById(_id);

    const index = show.dislikes.findIndex((_id) => _id === String(req.userId));

    if(index === -1) {
        show.dislikes.push(req.userId)
    }

    else {
        show.dislikes = show.dislikes.filter((_id) => !(_id === String(req.userId)) );
    }

    const updatedShow = await ShowMessage.findByIdAndUpdate(_id, show, { new: true });

    res.json(updatedShow);
};

export default router;