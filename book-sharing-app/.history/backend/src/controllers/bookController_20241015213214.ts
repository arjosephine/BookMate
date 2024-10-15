import { Request, Response } from 'express';
import Book from '../models/book';

// Get all books
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Create a new book
export const createBook = async (req: Request, res: Response) => {
  const { available, title, author, description, genre, condition, imageUrl } = req.body;

  const newBook = new Book({
    available,
    title,
    author,
    description,
    genre,
    condition,
    imageUrl,
  });

  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

// Update book availability
export const updateBookAvailability = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { available } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { available },
      { new: true }  // Return the updated document after update
    );

    if (!updatedBook) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }

    res.status(200).json(updatedBook);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
