import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Grid, Paper } from '@mui/material';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    alert('Signup successful!');
    // Replace with actual signup logic (e.g., API call)
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
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
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Box>

          <Box marginBottom={2}>
            <Button type="submit" variant="contained" fullWidth>
              Sign Up
            </Button>
          </Box>

          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                Already have an account? <a href="/login">Login</a>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
