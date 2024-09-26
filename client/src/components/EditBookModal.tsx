import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { IBook } from '../models/Book';

interface EditBookModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: IBook) => void;
  bookData: IBook;
  setBookData: React.Dispatch<React.SetStateAction<IBook>>;
}

const EditBookModal: React.FC<EditBookModalProps> = ({ open, onClose, onSave, bookData, setBookData }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Редактировать книгу</DialogTitle>
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
        />
        <TextField
          margin="dense"
          label="Автор"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.author}
          onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Описание"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.description}
          onChange={(e) => setBookData({ ...bookData, description: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Дата публикации"
          type="date"
          fullWidth
          variant="outlined"
          value={bookData.publishDate}
          onChange={(e) => setBookData({ ...bookData, publishDate: new Date(e.target.value) })}
        />
        <TextField
          margin="dense"
          label="Количество страниц"
          type="number"
          fullWidth
          variant="outlined"
          value={bookData.pages}
          onChange={(e) => setBookData({ ...bookData, pages: parseInt(e.target.value) })}
        />
        <TextField
          margin="dense"
          label="Жанр"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.genre}
          onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Discard
        </Button>
        <Button onClick={() => onSave(bookData)} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditBookModal;
