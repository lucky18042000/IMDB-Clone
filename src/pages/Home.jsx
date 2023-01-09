import React, { useState, useEffect } from "react";
import MovieList from './MovieList';

function Home() {
  const [PopularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=d5fe827d77d125eca81f49030e90ce85"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (<div>
    <MovieList />
  </div>);
}

export default Home;
