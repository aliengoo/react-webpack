import React from 'react';
import {Router} from 'react-router';
import Jumbotron from '../_common/components/Jumbotron';
import {connect} from 'react-redux';

import Navbar from '../_common/components/Navbar';

var Home = React.createClass({
  render: function () {
    const home = this.props.home.toJS();

    console.log(this.props);

    return (
      <div>
        <Navbar/>
        <div className="container">
          <Jumbotron>
            Home!
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
