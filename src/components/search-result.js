import React, { Component } from 'react';
import './search-result.css';

class SearchResult extends Component {
  render() {
    return (
      <div className="search-result">
        <div>
          <strong><em>Repository</em></strong>
          <br />
          <strong>Namespace: </strong>
          <br />
          <strong>Namespace type: </strong>
          <br />
          <strong>Name: </strong>
        </div>
        <div>
          <strong><em>Account</em></strong>
          <br />
          <strong>Name: </strong>
        </div>
      </div>
    );
  }
}

export default SearchResult;
