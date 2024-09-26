import React from "react";
import { Card, CardContent, CardMedia, Typography, IconButton, Stack, Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { GetApp } from '@mui/icons-material';
import { IBook } from "../models/Book";


const BookCard: React.FC<{ book: IBook; onEdit: () => void; onDelete: () => void }> = ({ book, onEdit, onDelete }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image="https://via.placeholder.com/100"
        alt={`${book.title} cover`}
      />
      <CardContent>
        <Typography variant="h6" component="div" noWrap>
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author: {book.author}
        </Typography>
        {book.description && (
          <Typography variant="body2" color="text.secondary" noWrap>
            {book.description}
          </Typography>
        )}
        {book.publishDate && (
          <Typography variant="body2" color="text.secondary">
            Publish Date: {new Date(book.publishDate).toLocaleDateString()}
          </Typography>
        )}
        {book.pages && (
          <Typography variant="body2" color="text.secondary">
            Pages: {book.pages}
          </Typography>
        )}
        {book.genre && (
          <Typography variant="body2" color="text.secondary">
            Genre: {book.genre}
          </Typography>
        )}
        <Stack direction="row" spacing={1} sx={{ marginTop: 2 }}>
          <IconButton
            color="secondary"
            onClick={() => { }} // @TODO
            sx={{ borderRadius: '50%', bgcolor: 'action.hover', '&:hover': { bgcolor: 'action.selected' } }}
          >
            <GetApp />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={1}>
            <IconButton
              color="primary"
              onClick={onEdit}
              sx={{ borderRadius: '50%', bgcolor: 'action.hover', '&:hover': { bgcolor: 'action.selected' } }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={onDelete}
              sx={{ borderRadius: '50%', bgcolor: 'action.hover', '&:hover': { bgcolor: 'action.selected' } }}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BookCard;
