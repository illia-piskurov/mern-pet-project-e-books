import mongoose, { ConnectOptions } from 'mongoose';

mongoose.connect('mongodb://localhost:27017', {
    user: "starlord",
    pass: "0208",
    dbName: "test"
} as ConnectOptions).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Connection error MongoDB:', error);
});