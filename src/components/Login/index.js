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
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  // const router=useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4012/api/auth/login', {email: email, password: password});
console.log(response)
      const token = response.data.token; 
      const username = response.data.user.name; 
      console.log(response)
      console.log(username)

      localStorage.setItem('token', token);
      
      localStorage.setItem('username',username);  
      localStorage.setItem('user',response.data.user.id);  
      setEmail('');
      setPassword('');
      // router('/'); 
      setTimeout(() => {
        window.location.replace('/');
      },2000)
      // Redirect to home page after successful login
    } catch (error) {
      alert('Login failed. Please try again.');
      console.log(error)
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: '20vh' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
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
