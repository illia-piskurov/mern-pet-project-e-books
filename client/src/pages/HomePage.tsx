import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2">E-books</Typography>
      <Button variant="contained" color="primary" component={Link} to="/books">
        View Books
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/add-book">
        Add Book
      </Button>
    </Container>
  );
};

export default HomePage;
