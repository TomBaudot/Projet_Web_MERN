import React, {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';
import {useDispatch} from "react-redux";
import { DropdownList } from 'react-widgets'

import movies from '../../images/movies.png';
import Movies from '../../components/Movies/Movies.js';
import Form from '../../components/Form/Form.js';
import SearchBar from '../../components/SearchBar/SearchBar.js'
import useStyles from './styles';
import { getMovies } from "../../actions/movies";

const IndexMovies = () => {
    const [currentId, setCurrentId] = useState(0);
    const [searchField, setSearchFiled] = useState('');
    const [selectedSearch, setSelectedSearch] = useState('title');
    const [searchPlaceholder, setSearchPlaceholder] = useState('Search Movie by Title');
    const [searchFieldValue,setSearchFieldValue] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect( () => {dispatch(getMovies());}, [currentId, dispatch]);

    const dopDonwListFunc = (e) => {
        // reformating from the dropdownlist
        let f = e;
        if(e === 'release date') f = 'release_date';
        if(e === 'lead actors') f = 'lead_actors';
        if(e === 'like') f = 'likeCount';
        if(e === 'dislike') f = 'dislikeCount';
        setSelectedSearch(f);

        let str_before = 'Search movie by ';
        if(e !== 'like' && e !== 'dislike'){
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
                <Typography className={classes.heading} variant="h2" align="center">Movies</Typography>
                <img className={classes.image} src={movies} alt="icon"/>
            </AppBar>
            { user?.result?.admin && (
                <div className={classes.buttonContainer}>
                    <Button  variant="contained" color="secondary" size="small" href="movies/add">Add a movie</Button>
                </div>
            )}
            <DropdownList data={['title', 'director', 'release date', 'description','genres','lead actors','like','dislike']} onSelect={dopDonwListFunc} defaultValue="Select search parameter"/>
            <SearchBar placeholder={searchPlaceholder} handleInputChange={(e) => {setSearchFiled(e.target.value);setSearchFieldValue(e.target.value)}} fieldValue={searchFieldValue}/>
            {currentId  ?(
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            ) : ''}
            <Movies setCurrentId={setCurrentId} filter={searchField} selectedSearch={selectedSearch} currentId={currentId}/>
        </Container>
    );
}

export default IndexMovies;