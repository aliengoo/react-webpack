import React from 'react';
import Immutable from 'immutable';

var MoviesResults = React.createClass({
  propTypes: {
    movies: React.PropTypes.object
  },

  render() {
    const {movies} = this.props;

    if (Immutable.Iterable.isIterable(movies) && movies.size > 0) {
      return this.renderWithMovies(movies);
    }

    return this.renderNoResults();
  },
  renderNoResults: function () {
    return (
      <div className="movies no-results">Nothing found</div>
    );
  },

  renderWithMovies: function (movies) {
    return (
      <table className="table table-bordered table-condensed table-hover movies-results">
        <thead>
        <tr>
          <th>Title</th>
          <th>Studio</th>
          <th>Released</th>
          <th>Status</th>
          <th>Sound</th>
          <th>Versions</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Aspect</th>
          <th>UPC</th>
          <th>DVD Release date</th>
        </tr>
        </thead>
        <tbody>
        {movies.map((movie, index) => {
          return (
            <tr key={index}>
              <td>{movie.DVD_Title}</td>
              <td>{movie.Studio}</td>
              <td>{movie.Released}</td>
              <td>{movie.Status}</td>
              <td>{movie.Sound}</td>
              <td>{movie.Versions}</td>
              <td>{movie.Price}</td>
              <td>{movie.Rating}</td>
              <td>{movie.Year}</td>
              <td>{movie.Genre}</td>
              <td>{movie.Aspect}</td>
              <td>{movie.UPC}</td>
              <td>{movie.DVD_ReleaseDate}</td>
            </tr>);
        })}
        </tbody>
      </table>
    );
  }
});

export default MoviesResults;
