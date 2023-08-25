import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1,
      category: 'Action',
      title: 'Harry Potter',
      author: 'Suzanne Collins',
      completed: 64,
      currentChap: 'Chapter 17',
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frannk Herbert',
      completed: 8,
      currentChap: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      completed: 0,
      currentChap: 'Introduction',
    },
  ];

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} props={book} title={book.title} />
      ))}
    </ul>
  );
};

export default BookList;
