import React from 'react';
import Jumbotron from '../components/Jumbotron';

import Navbar from '../components/Navbar';

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Jumbotron>Home!</Jumbotron>
        </div>

      </div>
    );
  }

});

export default Home;
