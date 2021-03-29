import mongoose from 'mongoose';

const showSchema = mongoose.Schema({
    creator:String,
    name:String,
    title: String,
    lead_actors: [String],
    genres: [String],
    nb_seasons: String,
    runtime: String,
    network: String,
    showrunner: String,
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

var ShowMessage = mongoose.model('ShowMessage', showSchema);

export default ShowMessage;