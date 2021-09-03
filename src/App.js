import React, { useState } from 'react';
import Movie from './components/Movie';
function App() {

  const [movieTitle, setMovieTitle] = useState();
  const [movieYear, setMovieYear] = useState();
  const [movies,setMovies] = useState([
    {title: 'hello1', year: 2001},
    {title: 'hello2', year:2002},
    {title: 'hello3', year:2003},
    {title: 'hello4', year:2004},
  ]);

  const renderMovies = movies.map(movie => {
    return(
      <Movie movie={movie} key={movie.title}/>
    );
  })

  const addMovie = (event)=> {
    event.preventDefault();
    setMovies([
      ...movies,
      {
        title: movieTitle,
        year: movieYear,
      }
    ])
  };
  
  return (
  <div className="App">
    <h1>Movie List</h1>
    <form onSubmit={addMovie}>
      <input
        type='text'
        value={movieTitle}
        placeholder="영화제목"
        onChange= {e=> setMovieTitle(e.target.value)}
      /><br/>
      <input
        type='text'
        value={movieYear}
        placeholder="개봉년도"
        onChange= {e=> setMovieYear(e.target.value)}
      /><br/>
      <button type="submit">영화추가</button>
    </form>
    {renderMovies}
  </div>
    );
}

export default App;
