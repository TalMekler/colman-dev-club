import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Books } from './books';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = (props) => {
    const [query, setQuery] = useState("");
    console.log(Books[0].items.map(book => (book.volumeInfo.imageLinks)));
    return (
        <div>
            <p className='mx-3'>
                <strong>Welcome, {props.UN}</strong><br></br>
                Hope you are doing well! Which book would you like to buy today?
            </p>

            <div>
                <input type={"text"} className={"mx-3 search"} placeholder={"Search..."} onChange={e => setQuery(e.target.value)}></input>
                <table className='mx-3 mt-3'>
                    {Books[0].items.filter(book => book.volumeInfo.title.toLowerCase().includes(query.toLowerCase())).map(book => (
                        <tr>
                            <td>
                            {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /> : <img src={"https://via.placeholder.com/150"} alt={book.volumeInfo.title} />}
                            </td>
                            <td className='text-center'><strong>{book.volumeInfo.title}</strong></td>
                            <td className='text-center'>{book.volumeInfo.publishedDate}</td>
                            <td><button type='button' className='btn btn-dark mx-3'>Add To Wishlist</button></td>
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    );
}

export default Search;