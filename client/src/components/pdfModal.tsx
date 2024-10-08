import React from 'react';

interface NavbarProps {
  pdfUrl: string
}

const PDFModal: React.FC<NavbarProps> = ({ pdfUrl }) => {
  return (
    <iframe
      src={pdfUrl}
      width="100%"
      height="600px"
      style={{ border: 'none', borderRadius: '10px' }}
      title="PDF Viewer"
    />
  );
};

export default PDFModal;
