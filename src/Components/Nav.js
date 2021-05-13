import React, { useContext } from 'react'
import './Component.css';
import { MovieContext } from './MovieContext';

const Nav = () => {

    const [movies] = useContext(MovieContext);

    const priceTotal = movies.reduce(function(previousValue, currentValue) {
        return {
          price: parseInt(previousValue.price) + parseInt(currentValue.price)
        }
      });

    return (
        <div id="NavBar">
            <h3>MyMovies</h3>
            <h5>List of movies: {movies.length}</h5>
            <h5>Total: {priceTotal.price} €</h5> 
        </div>
    );
}

export default Nav;
