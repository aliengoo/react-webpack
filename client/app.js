"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
global.jQuery = require('jquery');
global.bootstrap = require('bootstrap');

let Home = React.createClass({
  render: function() {
    return <div>Hello, World!</div>;
  }
});

ReactDOM.render(<Home/>, document.getElementById('react-container'));