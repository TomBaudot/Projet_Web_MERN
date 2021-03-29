import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import {createShow} from "../../actions/shows.js";

const Form = ({currentId}) => {
    const [showData, setshowData] = useState({title:'',lead_actors:'',genres:'',nb_seasons:'',runtime:'',network:'',showrunner:'',description:'',selectedFile:''});
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'))

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createShow({...showData, name:user?.result?.name}));
    };

    const clear = () => {
        setshowData({title:'',lead_actors:'',genres:'',nb_seasons:'',runtime:'',network:'',showrunner:'',description:'',selectedFile:''});
    };

    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please sign in to add new TV Shows and like or dislike TV Shows.
                </Typography>
            </Paper>
        )
    }


    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Add a show</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={showData.title} onChange={(e) => setshowData({ ...showData, title:e.target.value })}/>
                <TextField name="lead_actors" variant="outlined" label="Lead actors" fullWidth value={showData.lead_actors} onChange={(e) => setshowData({ ...showData, lead_actors:e.target.value })}/>
                <TextField name="genres" variant="outlined" label="Genres" fullWidth value={showData.genres} onChange={(e) => setshowData({ ...showData, genres:e.target.value })}/>
                <TextField name="nb_seasons" variant="outlined" label="Number of seasons" fullWidth value={showData.nb_seasons} onChange={(e) => setshowData({ ...showData, nb_seasons:e.target.value })}/>
                <TextField name="runtime" variant="outlined" label="Runtime" fullWidth value={showData.runtime} onChange={(e) => setshowData({ ...showData, runtime:e.target.value })}/>
                <TextField name="network" variant="outlined" label="Network" fullWidth value={showData.network} onChange={(e) => setshowData({ ...showData, network:e.target.value })}/>
                <TextField name="showrunner" variant="outlined" label="Showrunner" fullWidth value={showData.showrunner} onChange={(e) => setshowData({ ...showData, showrunner:e.target.value })}/>
                <TextField name="description" variant="outlined" label="Description" fullWidth value={showData.description} onChange={(e) => setshowData({ ...showData, description:e.target.value })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setshowData({...showData,selectedFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>

        </Paper>
    )
};

export default Form;
