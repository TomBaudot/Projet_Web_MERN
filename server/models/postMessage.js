import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    nom : String,
    réalisateur : String,
    année : Number,
    acteurs : [String],
    likeCount: {
        type:Number,
        default:0
    },
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;