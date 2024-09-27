import axios from 'axios';
import { IBook } from '../models/Book';

const API_URL = 'http://localhost:3001/books';

export default class BookService {
  static async fetchBooks(): Promise<IBook[]> {
    try {
      const response = await axios.get<IBook[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching books', error);
      throw error;
    }
  };

  static async createBook(book: IBook): Promise<IBook> {
    try {
      const response = await axios.post<IBook>(API_URL, book);
      return response.data;
    } catch (error) {
      console.error('Error creating book', error);
      throw error;
    }
  };

  static async getBookById(id: string): Promise<IBook> {
    try {
      const response = await axios.get<IBook>(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching book', error);
      throw error;
    }
  };

  static async updateBook(id: string, updatedBook: Partial<IBook>): Promise<IBook> {
    try {
      const response = await axios.put<IBook>(`${API_URL}/${id}`, updatedBook);
      return response.data;
    } catch (error) {
      console.error('Error updating book', error);
      throw error;
    }
  };

  static async deleteBook(id: string): Promise<{ message: string }> {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return { message: 'Book successfully deleted' };
    } catch (error) {
      console.error('Error deleting book', error);
      throw error;
    }
  };
}
