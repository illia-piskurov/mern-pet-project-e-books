import { Schema, model, Document } from 'mongoose';


interface IBook extends Document {
    title: string;
    author: string;
    description: string;
    publishDate: string;
    pages: number;
    genre: string;
    imageUrl: string;
    downloadUrl: string;
}

const bookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    publishDate: { type: String, required: true },
    pages: { type: Number },
    genre: { type: String, required: true },
    imageUrl: { type: String, required: true },
    downloadUrl: { type: String, required: true }
});

const Book = model<IBook>('Book', bookSchema);

export default Book;
