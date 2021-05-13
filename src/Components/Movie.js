import React from 'react';
import './Movie.css';

const Movie = ({ name, price }) => {

    return (
        <div>
            <h3>{name}</h3>
            <p> 
                {
                    price.includes('€') ? `${price}` : `${price} €`
                }
            </p>
        </div>
    );
}

export default Movie;
