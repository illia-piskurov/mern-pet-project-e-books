import React, { useMemo, useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import { testBooks } from '../models/Books';

const HomePage: React.FC = () => {
  const [filter, setFilter] = useState('');
  const filteredBooks = useMemo(() => {
    return testBooks.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
  }, [filter, testBooks])

  return (
    <Container sx={{ marginTop: '64px', paddingBottom: '14px' }}>
      <Navbar filter={filter} setFilter={setFilter}></Navbar>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {filteredBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BookCard book={book} onEdit={() => { }} onDelete={() => { }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
