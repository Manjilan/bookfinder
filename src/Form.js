import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search by Book Title or Author" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
