import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './index.css';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);   
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
   setErrors({}); // Reset errors 
   const newError = {};

    if (!email) newError.email = 'Email is required';
    if (!password) newError.password = 'Password is required';
    if (Object.keys(newError).length) {
      setErrors(newError);
      return;
    }

    try {
      const response = await axios.post('https://fashion-fusion-backend-vymx.onrender.com/api/auth/login', { email, password });
      const token = response.data.token; 
      const username = response.data.user.name; 

      localStorage.setItem('token', token);
      localStorage.setItem('username', username);  
      localStorage.setItem('user', response.data.user.id);  

      setEmail('');
      setPassword('');

      // Redirect to home page after successful login
      window.location.replace('/home',{replace: true});
    } catch (error) {
      alert('Login failed. Please try again.');
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: '20vh' }}>
        <Typography style={{ fontWeight: 'bolder' }}  color='primary'  variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          error = {!!errors.email} 
          helperText = {errors.email}
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          error = {!!errors.password}
          helperText = {errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
       
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit} 
          
        >
          Log In
        </Button>  
        <div>
          <p className='register-card-text-container'>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </Paper>
    </Container>
  );
};

export default Login;
