import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import {createMovie, updateMovie} from '../../actions/movies'


const Form = ({currentId, setCurrentId}) => {
    const [movieData, setmovieData] = useState({title:'',director:'',lead_actors:'',genres:'',release_date:'',description:'',selectedFile:''});
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const movie = useSelector((state) => currentId ? state.movies.find((m) => m._id === currentId) : null);

    useEffect(() => {
        if(movie) setmovieData(movie);
    }, [movie])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateMovie(currentId, movieData))
        }
        else {
            dispatch(createMovie({...movieData, name:user?.result?.name}));
        }

        clear();
    };

    const clear = () => {
        setCurrentId(null)
        setmovieData({title:'',director:'',lead_actors:'',genres:'',release_date:'',description:'',selectedFile:''});
    };

    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please sign in to like or dislike movies.
                </Typography>
            </Paper>
        )
    }


    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit' : 'Add'} a movie</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={movieData.title} onChange={(e) => setmovieData({ ...movieData, title:e.target.value })}/>
                <TextField name="director" variant="outlined" label="Director" fullWidth value={movieData.director} onChange={(e) => setmovieData({ ...movieData, director:e.target.value })}/>
                <TextField name="lead_actors" variant="outlined" label="Lead actors" fullWidth value={movieData.lead_actors} onChange={(e) => setmovieData({ ...movieData, lead_actors:e.target.value })}/>
                <TextField name="genres" variant="outlined" label="Genres" fullWidth value={movieData.genres} onChange={(e) => setmovieData({ ...movieData, genres:e.target.value })}/>
                <TextField name="release_date" variant="outlined" label="Release date" fullWidth value={movieData.release_date} onChange={(e) => setmovieData({ ...movieData, release_date:e.target.value })}/>
                <TextField name="description" variant="outlined" label="Description" fullWidth value={movieData.description} onChange={(e) => setmovieData({ ...movieData, description:e.target.value })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setmovieData({...movieData,selectedFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>

        </Paper>
    )
};

export default Form;
