import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Routes, Route, useNavigate} from "react-router-dom";
// import {Subject} from 'rxjs';
import Search from "./Search";

function Home(props) {

    const [userName, setUserName] = useState('');
    let un = "";

    const nav = useNavigate();

    const handleSubmit = (event) => {
        // setUserName(this.userName.value);
        un = document.getElementById("userName").value;
        if(emptyInput(un)) {
            alert('ERROR!\n You have to enter username!');
        }
        else {
            // alert("Not empty")
            props.setUN(un);
            nav('/search');
            // <Search username={un} />
            // this.useState({ redirect: "./components/Search" });
        }
    }

    function emptyInput(userInput) {
        return !userInput;
    }

    return (
        <div>
            <h1>Home Page</h1>
            <form>
                <label for="userName">User Name: </label>
                <input id="userName" name="userName" placeholder="Enter your user name"></input>
                {/* <input type={"submit"} value={"Submit"}></input> */}
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div> 
    )
}

export default Home;