import React from "react";
import { Grid, CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";

import Movie from './Movie/Movie.js';
import useStyles from './styles';


const Movies = ({setCurrentId,filter}) => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();
    console.log(filter);

    return(
        !movies.length ? <CircularProgress/> :(
            <grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    movies.filter(movie => movie.title.includes(filter)).map((movie) =>(
                        <Grid key={movie._id} item xs={12} xm={6}>
                            <Movie movie={movie} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
            </grid>
        )
    )
};

export default Movies;