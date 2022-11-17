import React, {useSearchParams} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";

const Search = (props) => {

    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const userName = urlParams.get('UserName');
    console.log(userName);

    const nav = useNavigate();
    console.log(props.UN);
    if(!props.UN) {
        nav('/');
    }

    return ( 
        <div>Hello, {props.UN}</div> 
    );
}
 
export default Search;