import React from 'react';
import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-200">
      <img
        src={book.imageUrl}
        alt={book.title}
        className="w-full h-48 object-cover rounded"
      />
      <div className="mt-4">
        <h2 className="text-lg font-bold">{book.title}</h2>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="mt-2 text-gray-800">{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
