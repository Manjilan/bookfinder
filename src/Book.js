import React, { Component } from 'react';
import "./Book.css";

class Book extends Component{
  render(){
    let bookdata = this.props.info.map((book, index) =>{
      if (!book.volumeInfo.authors) {
       book.volumeInfo.authors = []
      };
      if (!book.volumeInfo.publisher) {
       book.volumeInfo.publisher = ""
      };
      return (
        <div className="stack">
        <img src={book.volumeInfo.imageLinks.thumbnail} />
        <div>
            <p className="book-title">{book.volumeInfo.title}</p>
            <div>Author: {book.volumeInfo.authors.map((author, index) =>(
              <p key={index}>{author}</p>
            ))}</div>
            <p>Published by: {book.volumeInfo.publisher}</p>
        </div>
      </div>
    )
  });
  return (
    <div className="list">{bookdata}</div>
  );
}
}

export default Book;
