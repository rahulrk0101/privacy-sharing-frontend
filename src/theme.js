// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color for primary actions
    },
    secondary: {
      main: '#d32f2f', // Red color for secondary actions
    },
    background: {
      default: '#f4f6f8', // Light background color for the app
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      color: '#333',
    },
    body1: {
      fontSize: '1rem',
      color: '#666',
    },
  },
});

export default theme;
