import React, { useMemo, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import { testBooks } from '../models/Books';
import PDFModal from '../components/pdfModal';
import MyModal from '../components/MyModal';
import DeleteConfirmationModal from '../components/DeleteConfiramtionModal';
import EditBookModal from '../components/EditBookModal';
import { IBook } from '../models/Book';
import AddBookCard from '../components/AddBookCard';


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
              onEdit={(e) => {
                e.stopPropagation();
                openModal(<EditBookModal
                  book={book}
                  onSave={(book) => { console.log(book) }}
                />)
              }}
              onDelete={(e) => {
                e.stopPropagation();
                openModal(<DeleteConfirmationModal onConfirm={() => { }} />)
              }}
              onClick={() => {
                openModal(<PDFModal pdfUrl={book.downloadUrl}></PDFModal>)
              }} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} key="addbook">
          <AddBookCard onAdd={() => {
            openModal(<EditBookModal
              book={{title: "", author: "", description: "", publishDate: "", pages: 0, genre: "", imageUrl: "", downloadUrl: ""}}
              onSave={(book) => { console.log(book) }}
            />)
          }}/>
        </Grid>
      </Grid>
      <MyModal open={open} handleClose={handleClose}>
        {modalContent}
      </MyModal>
    </Container>
  );
};

export default HomePage;
