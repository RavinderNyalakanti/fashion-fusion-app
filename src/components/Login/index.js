import React, { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: '20vh' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
          }
          label="Show Password"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
        >
          Log In
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
