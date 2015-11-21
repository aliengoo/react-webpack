import React from 'react';

var PageHeader = React.createClass({
  render: function() {
    return (
      <header className="page-header">
        <h1>{this.props.children}</h1>
      </header>);
  }
});

export default PageHeader;
