
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import UploadData from './components/Dashboard/UploadData';
import ManageData from './components/Dashboard/ManageData';

const App = () => {
  const [page, setPage] = useState('login');

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login />;
      case 'signup':
        return <Signup />;
      case 'upload':
        return <UploadData />;
      case 'manage':
        return <ManageData />;
      default:
        return <Login />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <nav style={{ marginBottom: '20px' }}>
          <button onClick={() => setPage('login')}>Login</button>
          <button onClick={() => setPage('signup')}>Signup</button>
          <button onClick={() => setPage('upload')}>Upload Data</button>
          <button onClick={() => setPage('manage')}>Manage Data</button>
        </nav>
        {renderPage()}
      </div>
    </ThemeProvider>
  );
};

export default App;
