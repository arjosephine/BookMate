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
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <section className="relative h-screen bg-gray-800 text-white">
      {/* Video as Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/homepage/banner-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>


      {/* Books Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Book Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.length > 0 ? (
            books.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <p className="text-center text-gray-600">No books found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
