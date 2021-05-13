import React from 'react';
import MovieList from './Components/MovieList';
import Nav from './Components/Nav';
import { MovieProvider } from './Components/MovieContext';
import AddMovie from './Components/AddMovie';

function App() {

  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
