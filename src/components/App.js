import React, { Component } from 'react';
import './App.css';
import ALL_SEARCH_RESULTS from '../mock-data';

import SearchBox from './search-box';
import SearchResult from './search-result';
import SearchSuggestion from './search-suggestion';

class App extends Component {

  constructor() {
    super();
    this.state = {
      results: [],
      suggestions: [],
      loading: false,
      noResults: false,
      noSuggestions: false,
      message: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSearchTermEntered(searchTerm) {
    this.getData(searchTerm, 'results');
    this.setState({loading: true});
  }

  onLatestSearchTerm(searchTerm) {
    this.getData(searchTerm, 'suggestions');
    searchTerm === '' ? this.setState({loading: false}) : this.setState({loading: true});
  }

  findMatches(data, searchTerm, destination) {
    const searchRegEx = new RegExp(searchTerm, 'gi');
    const matches = [];
    for (let i = 0; i < data.accountResults.length; i++) {
      if (data.accountResults[i].name.match(searchRegEx)) {
        matches.push(data.accountResults[i]);
      }
    }
    for (let i = 0; i < data.repositoryResults.length; i++) {
      if (data.repositoryResults[i].name.match(searchRegEx)) {
        matches.push(data.repositoryResults[i]);
      } else if (data.repositoryResults[i].namespace.match(searchRegEx)) {
        matches.push(data.repositoryResults[i]);
      }
    }
    this.setState({loading: false});
    if (destination === 'results') {
      this.setState({noResults: false});
      matches[0] === undefined ? this.setState({noResults: true}) : this.setState({results: matches});
    } else {
      matches[0] === undefined ? this.setState({noSuggestions: true}) : this.setState({suggestions: matches});
    }
    console.log(matches, destination);
  }

  getData(searchTerm, destination) {

    this.setState({noSuggestions: false});

    if (searchTerm === '') {
      this.setState({loading: false});
      this.setState({suggestions: []});
      return;
    }

      const dataPromise = new Promise((resolve, reject) => {

        setTimeout(function(err, response) {
          response = ALL_SEARCH_RESULTS;
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        }, 1000);
      });

      dataPromise.then((result) => {
        this.setState({suggestions: []});
        this.findMatches(result, searchTerm, destination);
      }).catch((err) => {
        console.log(err);
      });

  }

  onInputChange(searchTerm, origin) {
    console.log(searchTerm);
    this.setState({searchTerm: searchTerm});

    let searchClicked = searchTerm => {
      
      if (searchTerm !== '') {
        this.onSearchTermEntered(searchTerm);
        this.setState({message: ''});
      } else {
        this.setState({message: 'Please enter a search term'});
      }
    }
    
    if (origin === 'search') {
      searchClicked(searchTerm);
    } else {
      this.onLatestSearchTerm(searchTerm);
      searchTerm === '' ? this.setState({message: ''}) : this.setState({message: 'Press enter to search'});
    }

  }

  render() {
    return (
      <div className="main-container">

        <div className="search-container">
          <SearchBox
            searchTerm={this.state.searchTerm}
            loading={this.state.loading}
            onInputChange={this.onInputChange}
            message={this.state.message}
          />
          { this.state.noSuggestions ?
            <div className="no-suggestions">
              No records found...
            </div>
            :
            <div className="suggestions-container">
              {this.state.suggestions.map((suggestion) => (
                <SearchSuggestion
                  suggestion={suggestion}
                />
              ))}
            </div>
          }
        </div>

        <div className="results-container">
          { this.state.noResults ?
            <div className="no-results">
              No records found...
            </div>
            :
            <div className="results-list">
              {this.state.results.map((result) => (
                <SearchResult
                  result={result}
                />
              ))}
            </div>
          }
        </div>

      </div>
    );
  }
}

export default App;