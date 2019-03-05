import React, { Component } from "react";
import Book from "./Book";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ books: nextProps.books });
  }
  render() {
    return (
      <div>
        <Book info={this.state.books} />
      </div>
    );
  }
}

export default BookList;
