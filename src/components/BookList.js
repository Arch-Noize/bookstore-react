import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

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
    <div>
      <ul>
        {books.map((book) => (
          <Book key={book.id} props={book} title={book.title} author={book.author} id={book.id}/>
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default BookList;
