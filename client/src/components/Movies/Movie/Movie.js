import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbDownAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from "react-redux";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";

import useStyles from './styles';
import {deleteMovie, likeMovie, dislikeMovie} from "../../../actions/movies";
import Collapse from "@material-ui/core/Collapse";



const Movie = ({movie, setCurrentId, currentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
    };

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={movie.selectedFile} title="test"/>
            <div className={classes.overlay}>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2">Released in : {movie.release_date}</Typography>
                <Typography variant="body2">Directed by : {movie.director}</Typography>
            </div>
            <CardActions  className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() =>dispatch(likeMovie(movie._id))}>
                    <Likes />
                </Button>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() =>dispatch(dislikeMovie(movie._id))}>
                    <Dislikes />
                </Button>
                {(user?.result?._id === movie?.creator) && (
                    <Button size="small" color="primary" onClick={() => dispatch(deleteMovie(movie._id))}>
                        <DeleteIcon fontSize="small"/>
                        Delete
                    </Button>
                )}
                <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded,})} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <div className={classes.details}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary">Staring : {movie.lead_actors.map((actor) =>`${actor} `)}</Typography>
                        <Typography variant="h6" color="textSecondary">Genres : {movie.genres.map((genre) =>`${genre} `)}</Typography>
                        <Typography variant="h6" gutterBottom>Description : {movie.description}</Typography>
                    </CardContent>
                </div>
            </Collapse>
        </Card>
    )
};

export default Movie;