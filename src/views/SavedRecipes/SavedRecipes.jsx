import React, { useEffect, useState } from 'react';
import { CardItem } from '../../components';
import { Box, Grid, Typography } from '@mui/material';
import { styles } from './styles';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SavedRecipes = () => {
  const navigate = useNavigate();
  const [savedUserRecipes, setSavedUserRecipes] = useState([]);
  useEffect(() => {
    const userSavedRecipes =
      JSON.parse(localStorage.getItem('userSavedRecipes')) || [];
    setSavedUserRecipes(userSavedRecipes);
  }, []);

  return (
    <div style={styles.savedRecipesContainer}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <ArrowBack
            fontSize='large'
            onClick={() => navigate(-1)}
            sx={{ cursor: 'pointer' }}
          />
          <Typography variant='h4' style={{ textAlign: 'center' }}>
            Saved Recipes
          </Typography>
        </Grid>
      </Grid>
      <CardItem meals={savedUserRecipes} />
    </div>
  );
};

export default SavedRecipes;
