import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    title: String,
    director: String,
    lead_actors: [String],
    genres: [String],
    release_date: String,
    description:String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    dislikeCount: {
        type: Number,
        default: 0,
    },
});

var MovieMessage = mongoose.model('MovieMessage', movieSchema);

export default MovieMessage;