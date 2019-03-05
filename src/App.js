import React, { Component } from 'react';
import BookList from './BookList';
import Form from './Form';
import Error from './Error';
import NotFound from './404';
import API from "./API";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      searchResults: [],
      query: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    event.preventDefault();
    this.setState({query: event.target.value.split(" ").join("+")});
  }
  handleSubmit(event){
    event.preventDefault();
    // console.log(this.state.query);
    API.getBooks(this.state.query)
    .then(response =>{
      // console.log(response.data.items);
      this.setState({searchResults: response.data.items})
    })
    .catch(err =>{
      this.setState({searchResults: "Error... Search Again!!!"})
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Book Finder</h1>
          <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          <BookList books={this.state.searchResults}/>
        </header>
      </div>
    );
  }
}

export default App;
