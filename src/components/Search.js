import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Books } from './books';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Search.css";

const Search = (props) => {
    const [query, setQuery] = useState("");
    console.log(Books[0].items.map(book => (book.volumeInfo.imageLinks)));
    return (
        <div className='position-relative'>
            <p className='mx-3'>
                <strong>Welcome, {props.UN}</strong><br></br>
                Hope you are doing well! Which book would you like to buy today?
            </p>

            <div className='position-relative w-100'>
                <div className='position-relative p-5 mb-5'>
                    <input type={"text"} className={"position-absolute text-center w-50 mb-4 py-2 fs-5 search"} placeholder={"Search..."} onChange={e => setQuery(e.target.value)}></input>
                </div>
                <table className='mx-auto w-50'>
                    {Books[0].items.filter(book => book.volumeInfo.title.toLowerCase().includes(query.toLowerCase())).map(book => (
                        <tr>
                            <td className='pt-2 '>
                            {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /> : <img src={"https://via.placeholder.com/150"} alt={book.volumeInfo.title} />}
                            </td>
                            <td className='text-center text-light'><strong>{book.volumeInfo.title}</strong></td>
                            <td className='text-center text-light'>{book.volumeInfo.publishedDate}</td>
                            <td className='text-end'><button type='button' className='btn btn-light'>Add To Wishlist</button></td>
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    );
}

export default Search;