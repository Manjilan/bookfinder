import React, { Component } from 'react';
import "./Book.css";

class Book extends Component{
  // constructor(props) {
  //   super(props);
  //   this.state= {
  //     bookList: []
  //   }
  // }
  // componentDidMount(){
  //   this.setState({bookList: this.props.books})
  // }
  render(){
    // console.log(this.props.books);
  //   let bookdata = this.state.bookList.map((book, index) =>{
  //     return (
  //       <div className="stack">
  //       <img src={book.volumeInfo.imageLinks.thumbnail} />
  //       <div>
  //           <p className="book-title">{book.volumeInfo.title}</p>
  //           <div>Author: {book.volumeInfo.authors.map((author, index) =>(
  //             <p key={index}>{author}</p>
  //           ))}</div>
  //           <p>Published by: {book.volumeInfo.publisher}</p>
  //       </div>
  //     </div>
  //   )
  // });
  return (
    <div>{/*bookdata*/}</div>
  );
}
}

export default Book;
