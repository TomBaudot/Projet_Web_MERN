import React from "react";

import useStyles from './styles.js';


const SearchBar = (props) => {

    const classes = useStyles();

    const onChange = () => {

    };

    return(
        <form className={`${classes.root} ${classes.form}`}>
            <input type="text" placeholder={props.placeholder} onChange={props.handleInputChange}/>
        </form>
    )
};

export default SearchBar;