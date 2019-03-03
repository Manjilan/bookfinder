import React, { Component } from 'react';
import BookList from './BookList';
import Form from './Form';
import Error from './Error';
import NotFound from './404';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Book Finder</h1>
          <Form />
          <BookList />
        </header>
      </div>
    );
  }
}

export default App;
