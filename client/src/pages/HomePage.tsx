import React, { useMemo, useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import { testBooks } from '../models/Books';
import PDFModal from '../components/pdfModal';
import MyModal from '../components/MyModal';

const HomePage: React.FC = () => {
  const [filter, setFilter] = useState('');
  const filteredBooks = useMemo(() => {
    return testBooks.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()))
  }, [filter, testBooks])

  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content: any) => {
    setModalContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalContent(null);
  };

  return (
    <Container sx={{ marginTop: '64px', paddingBottom: '14px' }}>
      <Navbar filter={filter} setFilter={setFilter}></Navbar>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {filteredBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BookCard 
              book={book}
              onEdit={() => { }}
              onDelete={() => { }}
              onClick={() => {openModal(<PDFModal pdfUrl='https://www.gutenberg.org/files/1342/old/pandp12p.pdf'></PDFModal>)}} />
          </Grid>
        ))}
      </Grid>
      <MyModal open={open} handleClose={handleClose}>
        {modalContent}
      </MyModal>
    </Container>
  );
};

export default HomePage;
