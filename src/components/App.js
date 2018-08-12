import React, { Component } from 'react';
import './App.css';

import SearchBox from './search-box';
import SearchResult from './search-result';
import SearchSuggestion from './search-suggestion';

class App extends Component {
  render() {
    return (
      <div className="main-container">

        <div className="search-container">
          <SearchBox />
          <div className="no-suggestions">
            No records found...
          </div>
          <div className="suggestions-container">
            <SearchSuggestion />
          </div>
        </div>
    
        <div className="results-container">
          <div className="no-results">
            No records found...
          </div>
          <div className="results-list">
            <SearchResult />
          </div>
        </div>

      </div>
    );
  }
}

export default App;