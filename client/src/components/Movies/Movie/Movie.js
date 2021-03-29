import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbDownAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from "react-redux";

import useStyles from './styles';
import {deleteMovie, likeMovie, dislikeMovie} from "../../../actions/movies";

const Movie = ({movie, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
            return movie.likes.find((like) => like === user?.result?._id)
            ? (
                <><ThumbUpAltIcon fontSize="small" />&nbsp; { `Like ${movie.likes.length }`}</>
            ) : (   
                <><ThumbUpAltOutlined fontSize="small" />&nbsp; { `Like ${movie.likes.length }`}</>
            );
    };

    const Dislikes = () => {
        return movie.dislikes.find((dislike) => dislike === user?.result?._id)
        ? (
            <><ThumbDownAltIcon fontSize="small" />&nbsp; { `Dislike ${movie.dislikes.length }`}</>
        ) : (   
            <><ThumbDownAltOutlined fontSize="small" />&nbsp; { `Dislike ${movie.dislikes.length }`}</>
        ); 
}

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={movie.selectedFile} title="test"/>
            <div className={classes.overlay}>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2">Released in : {movie.release_date}</Typography>
                <Typography variant="body2">Directed by : {movie.director}</Typography>
            </div>
            {user?.result?.admin && (
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={() => setCurrentId(movie._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            )}
            <div className={classes.details}>
                <Typography variant="body1" color="textSecondary">Staring : {movie.lead_actors.map((actor) =>`${actor} `)}</Typography>
                <Typography variant="body2" color="textSecondary">Genres : {movie.genres.map((genre) =>`${genre} `)}</Typography>
                <CardContent>
                    <Typography className={classes.title} variant="h5" gutterBottom>{movie.description}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" disabled={!user?.result} onClick={() =>dispatch(likeMovie(movie._id))}>
                        <Likes />
                    </Button>
                    <Button size="small" color="primary" disabled={!user?.result} onClick={() =>dispatch(dislikeMovie(movie._id))}>
                        <Dislikes />
                    </Button>
                    {user?.result?.admin && (
                    <Button size="small" color="primary" onClick={() => dispatch(deleteMovie(movie._id))}>
                        <DeleteIcon fontSize="small"/>
                        Delete
                    </Button>
                    )}
                </CardActions>
            </div>
        </Card>
    )
};

export default Movie;