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
import {deleteShow, likeShow, dislikeShow} from "../../../actions/shows";
import Collapse from "@material-ui/core/Collapse";

const Show = ({show, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded,})} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <div className={classes.details}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary">Staring : {show.lead_actors.map((actor) =>`${actor} `)}</Typography>
                        <Typography variant="h6" color="textSecondary">Genres : {show.genres.map((genre) =>`${genre} `)}</Typography>
                        <Typography variant="h6" color="textSecondary">Network : {show.network}</Typography>
                        <Typography variant="h6" color="textSecondary">Showrunner : {show.showrunner}</Typography>
                        <Typography variant="h6" color="textSecondary">Runtime : {show.runtime}</Typography>
                        <Typography variant="h6" gutterBottom>Description : {show.description}</Typography>
                    </CardContent>
                </div>
            </Collapse>
        </Card>
    )
};

export default Show;