import React from "react";

// import useStyles from './styles.js';
import { MDBInput   } from "mdbreact";

const SearchBar = (props) => {

    // const classes = useStyles();

    return(
        <div className="md-form md-outline">
            <MDBInput value={props.fieldValue} type='text' label={props.placeholder}  onChange={props.handleInputChange} outline={true} background icon="search"  size="lg"/>
        </div>
    )
};

export default SearchBar;