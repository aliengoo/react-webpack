"use strict";

require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('./__app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
global.jQuery = require('jquery');
global.bootstrap = require('bootstrap');

import Header from './components/Header';

let Home = React.createClass({
  render: function () {
    return <Header>Hello, World!</Header>;
  }
});

ReactDOM.render(<Home/>, document.getElementById('react-container'));