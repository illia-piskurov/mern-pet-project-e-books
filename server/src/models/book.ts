import { Schema, model, Document } from 'mongoose';


interface IBook extends Document {
    title: string;
    author: string;
    description?: string;
    publishDate?: Date;
    pages?: number;
    genre?: string;
    createdAt?: Date;
}

const bookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    publishDate: { type: Date },
    pages: { type: Number },
    genre: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Book = model<IBook>('Book', bookSchema);

export default Book;
