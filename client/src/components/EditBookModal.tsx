import React, { useState } from 'react';
import { DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { IBook } from '../models/Book';


interface EditBookModalProps {
  onSave: (book: IBook) => void;
  book: IBook;
}

const EditBookModal: React.FC<EditBookModalProps> = ({ onSave, book }) => {
  const [bookData, setBookData] = useState<IBook>(book);

  const slotProps = {
    input: {
      style: {
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },
    inputLabel: {
      style: {
        color: 'white',
      }
    },
  };

  return (
    <div>
      <DialogTitle>Edit metainforamtion</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Название"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.title}
          onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
          slotProps={slotProps}
        />
        <TextField
          margin="dense"
          label="Автор"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.author}
          onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
          slotProps={slotProps}
        />
        <TextField
          margin="dense"
          label="Описание"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.description}
          onChange={(e) => setBookData({ ...bookData, description: e.target.value })}
          slotProps={slotProps}
        />
        <TextField
          margin="dense"
          label="Дата публикации"
          type="date"
          fullWidth
          variant="outlined"
          value={bookData.publishDate}
          onChange={(e) => setBookData({ ...bookData, publishDate: new Date(e.target.value) })}
          slotProps={slotProps}
        />
        <TextField
          margin="dense"
          label="Количество страниц"
          type="number"
          fullWidth
          variant="outlined"
          value={bookData.pages}
          onChange={(e) => setBookData({ ...bookData, pages: parseInt(e.target.value) })}
          slotProps={slotProps}
        />
        <TextField
          margin="dense"
          label="Жанр"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.genre}
          onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
          slotProps={slotProps}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onSave(bookData)} color="primary" sx={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
          Save
        </Button>
      </DialogActions>
    </div>
  );
};

export default EditBookModal;
