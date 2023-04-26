import React from 'react';
import { app, database } from '../../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from './styles';
import { Box, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('This must be a valid email')
        .required('Email is required'),
      password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be greater than or equal to six characters'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      //if login successful, navigate to homepage
      if (user != null) {
        localStorage.setItem('userInfo', JSON.stringify(user));
        navigate('/');
        toast.success('Successfully Logged In!');
      }
    } catch (error) {
      console.error(error.message);
      const parts = error.message.split('/');
      const message = parts[1];
      toast.error(`(${message}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={styles.loginContainer}>
          <Box sx={styles.loginRight}>
            <h2>Login</h2>

            <div style={styles.loginInputFields}>
              <div style={styles.loginInputGroup}>
                <TextField
                  variant='standard'
                  type='email'
                  placeholder='Email'
                  {...register('email')}
                  inputProps={{ style: { fontSize: '1.4rem' } }}
                />
                {errors.email && (
                  <span style={styles.errorMessage}>
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div style={styles.loginInputGroup}>
                <TextField
                  variant='standard'
                  type='password'
                  placeholder='Passsword'
                  {...register('password')}
                  inputProps={{ style: { fontSize: '1.4rem' } }}
                />
                {errors.password && (
                  <span style={styles.errorMessage}>
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <Button style={styles.loginButton} type='submit'>
                Login
              </Button>
            </div>

            <div style={styles.loginFooterContainer}>
              Don't have an account?{' '}
              <Link style={styles.loginFooterLink} to='/signup'>
                Sign up
              </Link>
            </div>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default Login;
