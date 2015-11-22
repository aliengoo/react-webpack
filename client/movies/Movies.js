import React from 'react';
import {connect} from 'react-redux';
// components
import Navbar from '../_common/components/Navbar';
import PageHeader from '../_common/components/PageHeader';
import SearchInput from './components/SearchInput';
import MoviesResults from './components/MoviesResults';

// actions
import {findMovies} from './moviesActions';

var Movies = React.createClass({

  go: function (title) {
    this.props.dispatch(findMovies(title));
  },

  render: function () {

    const {fetching, movies} = this.props.movies;

    console.log(movies);
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
