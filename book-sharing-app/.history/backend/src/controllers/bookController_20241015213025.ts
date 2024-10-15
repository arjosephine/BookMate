import { Request, Response } from 'express';
import Book from '../models/book';

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

export const createBook = async (req: Request, res: Response) => {
  const { available, title, author, description, genre, condition, imageUrl } = req.body;

  const newBook = new Book({
    available,  // Ensure availability status is handled here
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
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBookAvailability = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { available } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { available },
      { new: true }  // Return the updated document
    );
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
