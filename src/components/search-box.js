import React, { Component } from 'react';
import './search-box.css';
import loading from '../loading.gif';

class SearchBox extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      searchTerm: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onInputChange(this.state.searchTerm, 'search');
  }

  onInputChange = (e) => {
    this.setState({searchTerm: e.target.value});
    if (e.key !== 'Enter') {
      this.props.onInputChange(e.target.value, 'not search');
    }
  }

  render() {
    return (
        <div className="search-box">
            <form onSubmit={this.handleSubmit}>
            <input  className="search-box-input"
                    type="text"
                    placeholder="Search"
                    onChange={this.onInputChange.bind(this)}
            />
            {this.props.loading && <img src={loading} className="search-box-loading" alt="Loading..." />
            }
            </form>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default SearchBox;