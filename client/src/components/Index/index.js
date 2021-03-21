import React from "react";
import {Button, CardActions} from "@material-ui/core";
import useStyles from './styles';

const Index = () => {
    const classes = useStyles();

    return(
        <CardActions className={classes.cardActions}>
            <div className={classes.overlay}>
                <div className={classes.movieButton} >
                <Button href="movies">
                    Movies
                </Button>
                </div>
                <div className={classes.showButton}>
                <Button href="shows">
                    Shows
                </Button>
                </div>
            </div>
        </CardActions>)
}

export default Index;