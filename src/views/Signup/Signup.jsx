import React from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from './styles';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Signup = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const schema = yup
    .object({
      displayName: yup.string().required('Name is required'),
      email: yup
        .string()
        .email('This must be a valid email')
        .required('Email is required'),
      password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be greater than or equal to six characters'),
      confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .min(
          6,
          'Confirm Password must be greater than or equal to six characters'
        )
        .oneOf([yup.ref('password')], 'Passwords does not match'),
    })
    .required();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(auth.currentUser, { displayName: data.displayName });
      localStorage.setItem('userInfo', JSON.stringify(auth.currentUser));
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={styles.signupContainer}>
          <Box sx={styles.signupRight}>
            <h2> Sign up </h2>

            <div style={styles.signupInputFields}>
              <div style={styles.signupInputGroup}>
                <TextField
                  variant='standard'
                  type='text'
                  placeholder='Name'
                  {...register('displayName')}
                  inputProps={{ style: { fontSize: '1.4rem' } }}
                />
                {errors.displayName && (
                  <span style={styles.errorMessage}>
                    {errors.displayName.message}
                  </span>
                )}
              </div>
              <div style={styles.signupInputGroup}>
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
              <div style={styles.signupInputGroup}>
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
              <div style={styles.signupInputGroup}>
                <TextField
                  variant='standard'
                  type='password'
                  placeholder='Confirm Passsword'
                  {...register('confirmPassword')}
                  inputProps={{ style: { fontSize: '1.4rem' } }}
                />
                {errors.confirmPassword && (
                  <span style={styles.errorMessage}>
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <Button style={styles.signupButton} type='submit'>
                Sign up
              </Button>
            </div>

            <div style={styles.signupFooterContainer}>
              Already have an account?{' '}
              <Link style={styles.signupFooterLink} to='/login'>
                Login
              </Link>
            </div>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default Signup;
