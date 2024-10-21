const mongoose = require('mongoose');

// Определяем схему для книги
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  publishDate: String,
  pages: Number,
  genre: String,
  imageUrl: String,
  downloadUrl: String
});

// Модель для коллекции книг
const Book = mongoose.model('Book', bookSchema);

// Массив тестовых книг
const testBooks = [
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel and cautionary tale.",
    publishDate: "1949-06-08",
    pages: 328,
    genre: "Dystopian",
    imageUrl: "https://anylang.net/sites/default/files/covers/1984.jpg",
    downloadUrl: "https://rauterberg.employee.id.tue.nl/lecturenotes/DDM110%20CAS/Orwell-1949%201984.pdf"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about the serious issues of rape and racial inequality.",
    publishDate: "1960-07-11",
    pages: 281,
    genre: "Southern Gothic, Bildungsroman",
    imageUrl: "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    downloadUrl: "https://www.raio.org/TKMFullText.pdf"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A novel that explores themes of decadence and excess in the Jazz Age.",
    publishDate: "1925-04-10",
    pages: 180,
    genre: "Tragedy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
    downloadUrl: "https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf"
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    description: "The narrative of Captain Ahab's obsessive quest to kill the giant white whale.",
    publishDate: "1851-10-18",
    pages: 635,
    genre: "Adventure, Epic",
    imageUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781681778488/moby-dick-9781681778488_hr.jpg",
    downloadUrl: "https://clasesinglesvalencia.com/wp-content/uploads/2018/01/Ingles-para-intermediario-moby-dick.pdf"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
    publishDate: "1813-01-28",
    pages: 279,
    genre: "Romantic fiction",
    imageUrl: "https://s3.amazonaws.com/adg-bucket/pride-and-pejudice-jane-austen/3425-medium.jpg",
    downloadUrl: "https://www.gutenberg.org/files/1342/old/pandp12p.pdf"
  }
];

// Подключение к MongoDB с использованием Mongoose
mongoose.connect('mongodb://localhost:27017', {
  user: "starlord",
  pass: "0208",
  dbName: "test"
}).then(() => {
  console.log('Connected to MongoDB');
  return Book.insertMany(testBooks); // Вставка массива книг в базу данных
}).then((result) => {
  console.log(`${result.length} books inserted successfully!`);
}).catch((error) => {
  console.error('Error connecting or inserting into MongoDB:', error);
}).finally(() => {
  mongoose.connection.close(); // Закрытие соединения
});
