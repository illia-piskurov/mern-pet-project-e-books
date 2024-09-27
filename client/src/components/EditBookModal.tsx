import React, { useState } from 'react';
import { DialogTitle, DialogContent, DialogActions, Button, TextField, FormHelperText, Snackbar, Alert } from '@mui/material';
import { IBook } from '../models/Book';

interface EditBookModalProps {
  onSave: (book: IBook) => void;
  book: IBook;
}

const EditBookModal: React.FC<EditBookModalProps> = ({ onSave, book }) => {
  const [bookData, setBookData] = useState<IBook>(book);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [notification, setNotification] = useState<{ open: boolean; message: string }>({ open: false, message: '' });

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    if (!bookData.title) newErrors.title = 'Title is required';
    if (!bookData.author) newErrors.author = 'Author is required';
    if (!bookData.description) newErrors.description = 'Description is required';
    if (!bookData.publishDate) newErrors.publishDate = 'Publish Date is required';
    if (!bookData.pages) newErrors.pages = 'Pages are required';
    if (!bookData.genre) newErrors.genre = 'Genre is required';
    if (!bookData.imageUrl) newErrors.imageUrl = 'Image Source is required';
    if (!bookData.downloadUrl) newErrors.downloadUrl = 'PDF Source is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setNotification({ open: true, message: 'Please fill in all required fields.' });
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (validateFields()) {
      onSave(bookData);
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  
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
  }

  return (
    <div>
      <DialogTitle>Edit metainforamtion</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.title}
          onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
          required
          error={!!errors.title}
          slotProps={slotProps}
        />
        {errors.title && <FormHelperText error>{errors.title}</FormHelperText>}
        
        <TextField
          margin="dense"
          label="Author"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.author}
          onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
          required
          error={!!errors.author}
          slotProps={slotProps}
        />
        {errors.author && <FormHelperText error>{errors.author}</FormHelperText>}
        
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.description}
          onChange={(e) => setBookData({ ...bookData, description: e.target.value })}
          required
          error={!!errors.description}
          slotProps={slotProps}
        />
        {errors.description && <FormHelperText error>{errors.description}</FormHelperText>}
        
        <TextField
          margin="dense"
          label="Publish Date"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.publishDate}
          onChange={(e) => setBookData({ ...bookData, publishDate: e.target.value })}
          required
          error={!!errors.publishDate}
          slotProps={slotProps}
        />
        {errors.publishDate && <FormHelperText error>{errors.publishDate}</FormHelperText>}
        
        <TextField
          margin="dense"
          label="Pages"
          type="number"
          fullWidth
          variant="outlined"
          value={bookData.pages}
          onChange={(e) => setBookData({ ...bookData, pages: parseInt(e.target.value) })}
          required
          error={!!errors.pages}
          slotProps={slotProps}
        />
        {errors.pages && <FormHelperText error>{errors.pages}</FormHelperText>}
        
        <TextField
          margin="dense"
          label="Genre"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.genre}
          onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
          required
          error={!!errors.genre}
          slotProps={slotProps}
        />
        {errors.genre && <FormHelperText error>{errors.genre}</FormHelperText>}
        
        <TextField
          margin="dense"
          label="Image Source"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.imageUrl}
          onChange={(e) => setBookData({ ...bookData, imageUrl: e.target.value })}
          required
          error={!!errors.imageUrl}
          slotProps={slotProps}
        />
        {errors.imageUrl && <FormHelperText error>{errors.imageUrl}</FormHelperText>}
        
        <TextField
          margin="dense"
          label="PDF Source"
          type="text"
          fullWidth
          variant="outlined"
          value={bookData.downloadUrl}
          onChange={(e) => setBookData({ ...bookData, downloadUrl: e.target.value })}
          required
          error={!!errors.downloadUrl}
          slotProps={slotProps}
        />
        {errors.downloadUrl && <FormHelperText error>{errors.downloadUrl}</FormHelperText>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="primary" sx={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
          Save
        </Button>
      </DialogActions>
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseNotification} severity="error" sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EditBookModal;
