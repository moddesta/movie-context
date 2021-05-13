import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
import './Component.css';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = e => {
        setName(e.target.value);
    };

    const updatePrice = e => {
        setPrice(e.target.value);
    };

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
        setName('');
        setPrice('');
    };


    return (
        <form className="w3-container" onSubmit={addMovie} >
            <div id="inputBar" className="form-row">
                <div className="form-group col-md-4">
                    {/* <label htmlFor="name" className="w3-text-black"><b>Movie Name</b></label> */}
                        <input 
                            id="name"
                            className="form-control" 
                            type="text"
                            name="name" 
                            value={name} 
                            onChange={updateName}
                            placeholder="Movie Name"
                        />
                </div>
                <div className="form-group col-md-4">
                    {/* <label htmlFor="price" className="w3-text-black"><b>Ticket ($)</b></label> */}
                        <input 
                            id="price"
                            className="form-control" 
                            type="number" 
                            name="price"
                            value={price} 
                            onChange={updatePrice}
                            placeholder="Ticket (€)"
                        />
                </div>
            
                <div className="form-group col-md-1">
                    <button id="button" disabled={ !price || !name }>Submit</button>
                </div>
            </div>
        </form>
    );
}

export default AddMovie;
