import React, { Component } from 'react';
import './../App.css';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: 0,
          moviename: 'The GodFather',
        },
        {
          id: 1,
          moviename: 'Matrix',
        },
      ],
    };
  }

  render() {
    const movieList = this.state.movies.map((movieobj) => {
      return <li key={movieobj.id}>{movieobj.moviename}</li>;
    });
    return (
      <ul className="movies-list">
        {movieList}
      </ul>
    );
  }
}

export default MovieList;
