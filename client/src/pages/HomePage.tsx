import React, { useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import { testBooks } from '../models/Books';

const HomePage: React.FC = () => {
  

  const [filter, setFilter] = useState('');

  return (
    <Container>
      <Typography variant="h2">E-books</Typography>
      <Navbar filter={filter} setFilter={setFilter}></Navbar>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {testBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BookCard book={book} onEdit={() => {}} onDelete={() => {}} />
          </Grid>
        ))}
      </Grid>
      <Typography>{filter}</Typography>
    </Container>
  );
};

export default HomePage;
