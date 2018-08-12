import React from 'react';
import './search-result.css';

const SearchResult = props => {
  return (
    <div className="search-result">
      {props.result.namespace ?
        <div>
          <strong><em>Repository</em></strong>
          <br />
          <strong>Namespace: </strong>{props.result.namespace}
          <br />
          <strong>Namespace type: </strong>{props.result.namespaceType}
          <br />
          <strong>Name: </strong>{props.result.name}
        </div>
        :
        <div>
          <strong><em>Account</em></strong>
          <br />
          <strong>Name: </strong>{props.result.name}
        </div>
      }
    </div>
  );
}

export default SearchResult;
