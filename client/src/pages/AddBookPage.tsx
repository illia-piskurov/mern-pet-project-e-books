import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const AddBookPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/books', { title, author });
      alert('Book added successfully');
      setTitle('');
      setAuthor('');
    } catch (error) {
      console.error('Error adding book', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Add New Book</Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Author"
        variant="outlined"
        fullWidth
        margin="normal"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Book
      </Button>
    </Container>
  );
};

export default AddBookPage;
