import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface DeleteConfirmationModalProps {
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ onConfirm }) => {
  return (
    <div>
      <DialogTitle>Are you confirming the deletion?</DialogTitle>
      <DialogTitle color="error">The record will be permanently deleted</DialogTitle>
        <Button
          onClick={onConfirm}
          color="error"
          sx={{backgroundColor: 'rgba(255, 255, 255, 0.1)', marginLeft: '20px'}}
        >
          Yes
        </Button>
    </div>
  );
};

export default DeleteConfirmationModal;
