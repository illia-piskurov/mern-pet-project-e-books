import { IBook } from "./Book";

export const testBooks: IBook[] = [
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel and cautionary tale.",
    publishDate: new Date("1949-06-08"),
    pages: 328,
    genre: "Dystopian",
    createdAt: new Date(),
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about the serious issues of rape and racial inequality.",
    publishDate: new Date("1960-07-11"),
    pages: 281,
    genre: "Southern Gothic, Bildungsroman",
    createdAt: new Date(),
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A novel that explores themes of decadence and excess in the Jazz Age.",
    publishDate: new Date("1925-04-10"),
    pages: 180,
    genre: "Tragedy",
    createdAt: new Date(),
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    description: "The narrative of Captain Ahab's obsessive quest to kill the giant white whale.",
    publishDate: new Date("1851-10-18"),
    pages: 635,
    genre: "Adventure, Epic",
    createdAt: new Date(),
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
    publishDate: new Date("1813-01-28"),
    pages: 279,
    genre: "Romantic fiction",
    createdAt: new Date(),
  },
];