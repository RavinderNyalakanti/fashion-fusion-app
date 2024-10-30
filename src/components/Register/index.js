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

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setusername] = useState('');
  const [showPassword, setShowPassword] = useState(false);  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4012/api/auth/signup', {email: email, password: password, name: username});
      console.log(response)
      if(response.status === 400){
        alert(response.data.message);
        return;
      }
      const token = response.data.token;
      localStorage.setItem('token', token);
      alert('Register successful!'); 
      setEmail(''); 
      setPassword('');
      setusername(''); 
      console.log(response.data)
     
       window.location.replace('/login'); // Redirect to home page after successful login
    } catch (error) {
      alert(error.response.data.message);
    }
  }; 
  // console.log(username)

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: '20vh' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Register
        </Typography>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
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
        Register
        </Button> 
        <p>Already have an account? <a href="/login">Login</a></p>
      </Paper>
    </Container>
  );
};

export default Register;
