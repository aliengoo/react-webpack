import React from 'react';

var MoviesResults = React.createClass({
  propTypes: {
    movies: React.PropTypes.array
  },

  render() {
    const {movies} = this.props;

    if (movies && movies.length > 0) {
      return this.renderWithMovies(movies);
    }

    return this.renderNoResults();
  },
  renderNoResults: function() {
    return (
      <div className="movies no-results">Nothing found</div>
    );
  },

  renderWithMovies: function(movies) {
    return (
      <table className="table table-bordered table-hover">
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
