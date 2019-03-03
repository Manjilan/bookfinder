import React, { useState } from 'react';
import "./Book.css";

const Book = () => {
    const [bookdata, setBookdata] = useState({
    selfLink: "https://www.googleapis.com/books/v1/volumes/zYw3sYFtz9kC",
    volumeInfo: {
    title: "The Contemporary Thesaurus of Search Terms and Synonyms",
    subtitle: "A Guide for Natural Language Computer Searching",
    authors: [
    "Sara D. Knapp"
    ],
    publisher: "Greenwood Publishing Group",
    publishedDate: "2000",
    imageLinks: {
    smallThumbnail: "http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    thumbnail: "http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  }}});
    return (
      <div className="stack">
        <img src={bookdata.volumeInfo.imageLinks.thumbnail} />
        <div>
            <p className="book-title">{bookdata.volumeInfo.title}</p>
            <div>Author: {bookdata.volumeInfo.authors.map((author, index) =>(
              <p key={index}>{author}</p>
            ))}</div>
            <p>Published by: {bookdata.volumeInfo.publisher}</p>
        </div>
      </div>
    );
}

export default Book;
