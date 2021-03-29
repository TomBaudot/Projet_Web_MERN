import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbDownAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from "react-redux";

import useStyles from './styles';
import {deleteShow, likeShow, dislikeShow} from "../../../actions/shows";

const Show = ({show, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        return show.likes.find((like) => like === user?.result?._id)
            ? (
                <><ThumbUpAltIcon fontSize="small" />&nbsp; { `Like ${show.likes.length }`}</>
            ) : (
                <><ThumbUpAltOutlined fontSize="small" />&nbsp; { `Like ${show.likes.length }`}</>
            );
    };

    const Dislikes = () => {
        return show.dislikes.find((dislike) => dislike === user?.result?._id)
            ? (
                <><ThumbDownAltIcon fontSize="small" />&nbsp; { `Dislike ${show.dislikes.length }`}</>
            ) : (
                <><ThumbDownAltOutlined fontSize="small" />&nbsp; { `Dislike ${show.dislikes.length }`}</>
            );
    }

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={show.selectedFile} title="test"/>
            <div className={classes.overlay}>
                <Typography variant="h6">{show.title}</Typography>
                <Typography variant="body2">Number of seasons : {show.nb_seasons}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body1" color="textSecondary">Staring : {show.lead_actors.map((actor) =>`${actor} `)}</Typography>
                <Typography variant="body2" color="textSecondary">Genres : {show.genres.map((genre) =>`${genre} `)}</Typography>
                <CardContent>
                    <Typography className={classes.title} variant="h5" gutterBottom>{show.description}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" disabled={!user?.result} onClick={() =>dispatch(likeShow(show._id))}>
                        <Likes />
                    </Button>
                    <Button size="small" color="primary" disabled={!user?.result} onClick={() =>dispatch(dislikeShow(show._id))}>
                        <Dislikes />
                    </Button>
                    {(user?.result?._id === show?.creator) && (
                        <Button size="small" color="primary" onClick={() => dispatch(deleteShow(show._id))}>
                            <DeleteIcon fontSize="small"/>
                            Delete
                        </Button>
                    )}
                </CardActions>
            </div>
        </Card>
    )
};

export default Show;