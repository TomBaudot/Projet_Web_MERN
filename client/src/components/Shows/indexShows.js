import React, {useState, useEffect} from "react";
import {Container, AppBar, Typography, Grid, Button} from '@material-ui/core';
import {useDispatch} from "react-redux";
import { DropdownList } from 'react-widgets'

import show from '../../images/show.png';
import Shows from '../../components/Shows/Shows.js';
import Form from '../../components/Form/FormShows.js';
import SearchBar from '../../components/SearchBar/SearchBar.js'
import useStyles from './styles';
import { getShows } from "../../actions/shows";
import movie from "../../images/movie.png";

const IndexShows = () => {
    const [currentId, setCurrentId] = useState(0);
    const [searchField, setSearchFiled] = useState('');
    const [selectedSearch, setSelectedSearch] = useState('title');
    const [searchPlaceholder, setSearchPlaceholder] = useState('Search TV Show by Title');
    const [searchFieldValue,setSearchFieldValue] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect( () => {dispatch(getShows());}, [currentId, dispatch]);

    const dopDonwListFunc = (e) => {
        // reformating from the dropdownlist
        let f = e;
        if(e === 'Title') f = 'title';
        if(e === 'Number of seasons') f = 'nb_seasons';
        if(e === 'Runtime') f = 'runtime';
        if(e === 'Network') f = 'network';
        if(e === 'Showrunner') f = 'showrunner';
        if(e === 'Lead actors') f = 'lead_actors';
        if(e === 'Like') f = 'likeCount';
        if(e === 'Dislike') f = 'dislikeCount';
        if(e === 'Description') f = 'description';
        if(e === 'Genres') f = 'genres';
        setSelectedSearch(f);

        let str_before = 'Search show by ';
        if(e !== 'Like' && e !== 'Dislike'){
            setSearchPlaceholder(str_before.concat(e));
        }
        else{
            setSearchPlaceholder(str_before.concat(e).concat(" ( you can use >, < and = )"));
        }
        setSearchFieldValue('');
    };

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Shows   <img src={show} alt="icon" height="60"/></Typography>
            </AppBar>
            { user?.result?.admin && (
                <div className={classes.buttonContainer}>
                    <Button  variant="contained" color="secondary" size="small" href="shows/add">Add a show</Button>
                </div>
            )}
            <DropdownList data={['Title', 'Number of seasons', 'Runtime', 'Network', 'Showrunner', 'Description','Genres','Lead actors','Like','Dislike']} onSelect={dopDonwListFunc} defaultValue="Select search parameter"/>
            <SearchBar placeholder={searchPlaceholder} handleInputChange={(e) => {setSearchFiled(e.target.value);setSearchFieldValue(e.target.value)}} fieldValue={searchFieldValue}/>
            {currentId  ?(
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            ) : ''}
            <Shows setCurrentId={setCurrentId} filter={searchField} selectedSearch={selectedSearch}/>
        </Container>
    );
}

export default IndexShows;