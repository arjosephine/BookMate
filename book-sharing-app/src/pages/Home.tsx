import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { Book } from '../types/book';

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:3000/api/books');
    const data = await response.json();
    setBooks(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
