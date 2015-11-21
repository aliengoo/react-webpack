import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <h1>{this.props.children}</h1>
      </header>);
  }
});

export default Header;
