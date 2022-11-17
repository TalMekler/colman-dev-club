import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Books } from './books';

const Search = (props) => {
    const [query, setQuery] = useState("");
    console.log(Books[0].items.map(book => (book.volumeInfo.imageLinks)));
    return (
        <div>
            <p>
                <strong>Welcome, {props.UN}</strong><br></br>
                Hope you are doing well!
            </p>

            <div>
                <input type={"text"} className={"search"} placeholder={"Search.."} onChange={e => setQuery(e.target.value)}></input>
                <table>
                    {Books[0].items.filter(book => book.volumeInfo.title.toLowerCase().includes(query.toLowerCase())).map(book => (
                        <tr>
                            <td>
                            {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /> : <img src={"https://via.placeholder.com/150"} alt={book.volumeInfo.title} />}
                            </td>
                            <td><strong>{book.volumeInfo.title}</strong></td>
                            <td>{book.volumeInfo.publishedDate}</td>
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    );
}

export default Search;