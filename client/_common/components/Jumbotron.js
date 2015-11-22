import React from 'react';
import PageHeader from './PageHeader';

var Jumbotron = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <PageHeader>
          {this.props.children}
        </PageHeader>
      </div>);
  }
});

export default Jumbotron;