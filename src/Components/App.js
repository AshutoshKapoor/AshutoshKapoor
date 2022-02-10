import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

class App extends React.Component {
  componentDidMount() {
    this.props.store.dispatch({
      type: 'ADD_MOVIE',
      movies: data
    });
  };

  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => {
              return <MovieCard movie={movie} key={`movie-${index}`} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
