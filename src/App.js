import './App.css';
// import TestElement from './TestElement';
import MovieList from './components/MovieList'
import Movie from './components/Movie';
import React from 'react';
import Title from './components/Title';

function App() {

  let userName = "Guest"

  return (
    <div>
      <>
        <Title/>
      </>
      <>
        <h1>Movie Info</h1>
      </>
      <>
        <MovieList/>
      </>
    </div>
  );
}

export default App;
