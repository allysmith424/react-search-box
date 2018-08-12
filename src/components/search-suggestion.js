import React from 'react';
import './search-suggestion.css';

const SearchSuggestion = props => {
  return (
    <div className="search-suggestion">
      <span>
        {props.suggestion.namespaceType}/
      </span>
      <strong>{props.suggestion.name}</strong>
    </div>
  );
}

export default SearchSuggestion;