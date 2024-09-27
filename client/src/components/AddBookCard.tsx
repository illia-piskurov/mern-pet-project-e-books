import React from "react";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface AddBookCardProps {
  onAdd: () => void;
}

const AddBookCard: React.FC<AddBookCardProps> = ({ onAdd }) => {
  return (
    <Card
      sx={{
        backgroundColor: 'rgba(17, 25, 40, 0.5)',
        backdropFilter: "blur(7px) saturate(120%)",
        color: "white",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          color="primary"
          onClick={onAdd}
          sx={{
            borderRadius: '50%',
            bgcolor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': { bgcolor: 'action.selected' },
            width: 56,
            height: 56,
          }}
        >
          <AddIcon />
        </IconButton>
        <Typography variant="h6" sx={{ marginTop: 1 }}>
          Add New Book
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AddBookCard;
