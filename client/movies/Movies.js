import React from 'react';
import {connect} from 'react-redux';
// components
import Navbar from '../_common/components/Navbar';
import PageHeader from '../_common/components/PageHeader';
import SearchInput from './components/SearchInput';
import MoviesResults from './components/MoviesResults';

// actions
import {findMoviesWithTitle, findMovies} from './moviesActions';

var Movies = React.createClass({

  componentDidMount: function () {
    this.props.dispatch(findMovies());
  },

  go: function (title) {
    this.props.dispatch(findMoviesWithTitle(title));
  },

  render: function () {

    const {fetching, movies} = this.props.movies;

    return (
      <div>
        <Navbar/>

        <div className="container-fluid">
          <PageHeader>
            Movies
          </PageHeader>
          <SearchInput go={this.go} fetching={fetching}/>
          <MoviesResults movies={movies}/>
        </div>

      </div>);
  }
});

export default connect((state) => {

  return {
    movies: state.movies
  };


})(Movies);
