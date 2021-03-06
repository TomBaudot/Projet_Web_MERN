import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from "react-redux";

import useStyles from './styles';
import {deleteMovie, likeMovie, dislikeMovie} from "../../../actions/movies";

const Movie = ({movie, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={movie.selectedFile} title={movie.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2">{movie.release_date}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body1" color="textSecondary">Staring : {movie.lead_actors.map((actor) =>`${actor} `)}</Typography>
                <Typography variant="body2" color="textSecondary">Genres : {movie.genres.map((genre) =>`${genre} `)}</Typography>
                <CardContent>
                    <Typography className={classes.title} variant="h5" gutterBottom>{movie.description}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={() =>dispatch(likeMovie(movie._id))}>
                        <ThumbUpAltIcon fontSize="small"/>
                        Like
                        {movie.likeCount}
                    </Button>
                    <Button size="small" color="primary" onClick={() =>dispatch(dislikeMovie(movie._id))}>
                        <ThumbDownAltIcon fontSize="small"/>
                        Dislike
                        {movie.dislikeCount}
                    </Button>
                    <Button size="small" color="primary" onClick={() => dispatch(deleteMovie(movie._id))}>
                        <DeleteIcon fontSize="small"/>
                        Delete
                    </Button>
                </CardActions>
            </div>
        </Card>
    )
};

export default Movie;