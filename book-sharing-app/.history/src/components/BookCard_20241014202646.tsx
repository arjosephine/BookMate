import React from 'react';
import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 text-xl font-bold">{book.title}</h3>
      <p className="text-gray-600">{book.author}</p>
    </div>
  );
};

export default BookCard;
