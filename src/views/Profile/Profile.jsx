import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Box, Grid, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setUser(userInfo);
  }, []);

  return (
    <>
      <div style={styles.profileContainer}>
        <Grid container spacing={5}>
          <ArrowBackIcon
            fontSize='large'
            onClick={() => navigate(-1)}
            sx={{ cursor: 'pointer' }}
          />
          <Grid item xs={12}>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
              Profile
            </Typography>
            <Box sx={styles.linkContainer}>
              <Link
                variant='contained'
                color='primary'
                component='button'
                to='/savedRecipes'
                style={styles.savedRecipeLink}
              >
                Saved Recipes
              </Link>
            </Box>
          </Grid>
        </Grid>
      </div>

      <form style={styles.formContainer}>
        <Box sx={styles.fieldsContainer}>
          <TextField
            variant='standard'
            label='Name'
            sx={{ height: 40 }}
            disabled
            value={user?.displayName || ''}
          />
          <TextField
            variant='standard'
            label='Email'
            type='email'
            sx={{ height: 40 }}
            disabled
            value={user?.email || ''}
          />
        </Box>
      </form>
    </>
  );
};

export default Profile;
