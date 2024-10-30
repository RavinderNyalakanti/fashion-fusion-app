import React, { useState } from 'react'; 
import axios from 'axios';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4012/api/auth/login', {email: email, password: password});
      const token = response.data.token;
      console.log(response)
      localStorage.setItem('token', token);
    
      window.location.replace('/'); // Redirect to home page after successful login
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

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
onClick={handleSubmit}
        >
          Log In
        </Button> 
        <p>dont have an account? <a href="/register">Register</a></p>
      </Paper>
    </Container>
  );
};

export default Login;
