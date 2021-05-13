import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            name: 'Vanilla sky',
            price: '8',
            id: 1234
        },
        {
            name: 'Alice in Wonderland',
            price: '9',
            id: 1235
        },
        {
            name: 'Shutter Island',
            price: '12',
            id: 1236
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}


