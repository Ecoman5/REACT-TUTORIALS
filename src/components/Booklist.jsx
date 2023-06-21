import React from 'react'

const Book = ({book }) => {
 return (
  <div>
   <h2>Title: {book.title} </h2>
  </div>
 );
};

const Booklist = () => {
 const books = [
  { id: 1, title: "Sugar Girl" },
  { id: 2, title: "Drummer boy" },
  { id: 3, title: "Journey Dray" },
  { id: 4, title: "Bad Ass" },
  { id: 5, title: "One Man Down" },

 ];
 return (
  <div>
   <h1>Bestselling Books</h1>
   {books.map((book) => {
    return <Book key={book.id} book={book} />;
   })}
  </div>
 );
};

export default Booklist