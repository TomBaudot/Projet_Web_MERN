import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    creator:String,
    name:String,
    title: String,
    director: String,
    lead_actors: [String],
    genres: [String],
    release_date: String,
    description:String,
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    },
});

var MovieMessage = mongoose.model('MovieMessage', movieSchema);

export default MovieMessage;