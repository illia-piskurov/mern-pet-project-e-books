import { CircularProgress } from '@mui/material';

const LoadingComponent = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <CircularProgress size={100} sx={{ color: 'primary.main' }} />
    </div>
  );
};

export default LoadingComponent;