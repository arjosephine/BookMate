router.get('/', async (req, res) => {
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
  });
  