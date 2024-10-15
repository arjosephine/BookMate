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
  try {
    let newBook;
  req.body.forEach(async (element: any) => {
    console.log("book:", element);
    const book = new Book(element);
    newBook = await book.save();

  });

  //const book = new Book(req.body);
 
   // const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
