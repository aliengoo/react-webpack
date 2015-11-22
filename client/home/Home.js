import React from 'react';
import Jumbotron from '../components/Jumbotron';
import {connect} from 'react-redux';

import Navbar from '../components/Navbar';

var Home = React.createClass({
  render: function () {
    const home = this.props.home.toJS();

    return (
      <div>
        <Navbar/>
        <div className="container">
          <Jumbotron>
            Home
            <p>{home.message}</p>
          </Jumbotron>

        </div>

      </div>
    );
  }

});

export default connect((state) => {
  return {home: state.home};
})(Home);
