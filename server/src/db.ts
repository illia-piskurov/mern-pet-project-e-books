import mongoose, { ConnectOptions } from 'mongoose';

mongoose.connect('mongodb://localhost:27017', {
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
    dbName: "ebooks"
} as ConnectOptions).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error MongoDB:', error);
});