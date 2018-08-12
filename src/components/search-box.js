import React, { Component } from 'react';
import './search-box.css';
import loading from '../loading.gif';

class SearchBox extends Component {
  render() {
    return (
        <div className="search-box">
            <form>
            <input  className="search-box-input"
                    type="text"
                    placeholder="Search" />
            <img src={loading} className="search-box-loading" alt="Loading..." />
            </form>
        <p>Message goes here</p>
      </div>
    );
  }
}

export default SearchBox;