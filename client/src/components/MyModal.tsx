import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Backdrop, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface NavbarProps {
  open: boolean,
  handleClose: any,
  children: any
}

const MyModal: React.FC<NavbarProps> = ({ open, handleClose, children }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: 'rgba(17, 25, 40, 0.5)',
          backdropFilter: "blur(7px) saturate(120%)",
          color: "white",
          padding: '20px',
          borderRadius: '15px'
        }
      }}
    >
      <DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          style={{ position: 'absolute', right: 20, top: 5 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default MyModal;