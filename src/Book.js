import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  render() {
    if(this.props.info === ["Error... Search Again!!!"] ){
      return ( <h3>{this.props.info[0]}</h3>)
    } else {
      let bookdata = this.props.info.map((book, index) => {
        if (!book.volumeInfo.authors) {
          book.volumeInfo.authors = ["No Author"];
        }
        if (!book.volumeInfo.publisher) {
          book.volumeInfo.publisher = "Publisher Unknown";
        }
        return (
          <div className="stack">
            <img src={book.volumeInfo.imageLinks.thumbnail} />
            <div className="info">
              <div className="details">
                <p className="book-title">{book.volumeInfo.title}</p>
                <div>
                  Author: <br />
                  {book.volumeInfo.authors.join(", ")}
                </div>
                <p>Published by: {book.volumeInfo.publisher}</p>
              </div>
              <a href={book.volumeInfo.infoLink}>
                <button>See this book</button>
              </a>
            </div>
          </div>
        );
      });
      return <div className="list">{bookdata}</div>;
    }
  }
}

export default Book;
