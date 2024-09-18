import { Router, Request, Response } from 'express';
import Book from '../models/book';


const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        const err = error as Error;
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book was not found' });
        res.json(book);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) return res.status(404).json({ message: 'Book was not found' });
        res.json(book);
    } catch (error) {
        const err = error as Error;
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book was not found' });
        res.json({ message: 'Book successfully deleted' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

export default router;
