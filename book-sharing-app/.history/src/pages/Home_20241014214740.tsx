import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { Book } from '../types/book';

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/books');
      const data = await response.json();
      console.log(data);  // Add this line to log the data in the browser console
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {books.length > 0 ? (
        books.map((book) => <BookCard key={book.id} book={book} />)
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default Home;
