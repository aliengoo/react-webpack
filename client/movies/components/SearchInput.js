import React from 'react';
import FormGroup from '../../_common/components/FormGroup';
import ControlLabel from '../../_common/components/ControlLabel';
import InputGroup from '../../_common/components/InputGroup';

var SearchInput = React.createClass({

  propTypes: {
    go: React.PropTypes.func.isRequired,
    fetching: React.PropTypes.bool
  },

  go: function(){
    this.props.go(this.refs.search.value);
  },

  render: function () {
    const {go, fetching} = this.props;

    return (
      <div className="movies search-input">
        <InputGroup>
          <input type="text" className="form-control" placeholder="Search for..." disabled={fetching} name="search" ref="search" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" disabled={fetching} onClick={this.go}>Go!</button>
          </span>
        </InputGroup>
      </div>);
  }
});

export default SearchInput;
