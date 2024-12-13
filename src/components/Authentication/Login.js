import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Paper, Grid } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Simulate login success
    if (email === 'test@example.com' && password === 'password123') {
      alert('Login successful!');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        {error && <Typography color="error" variant="body2" align="center">{error}</Typography>}

        <form onSubmit={handleSubmit}>
          <Box marginBottom={2}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          
          <Box marginBottom={2}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Box marginBottom={2}>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Box>

          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                Don't have an account? <a href="/signup">Sign Up</a>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;



