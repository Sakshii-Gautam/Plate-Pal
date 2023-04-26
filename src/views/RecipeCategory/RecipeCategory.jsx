import React from 'react';
import { styles } from './styles';
import { Grid, LinearProgress, Typography } from '@mui/material';
import { CardItem } from '../../components';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RecipeCategory = () => {
  const {
    category: {
      category: { meals },
      isLoading,
      isError,
    },
  } = useSelector((state) => state.food);

  const navigate = useNavigate();
  const { category } = useParams();

  if (isError) {
    <h1>Something Went Wrong!</h1>;
  }

  return (
    <>
      {isLoading ? (
        <LinearProgress color='success' />
      ) : (
        <div style={styles.allMealsContainer}>
          <Grid container spacing={5}>
            <ArrowBackIcon
              fontSize='large'
              onClick={() => navigate(-1)}
              sx={{ cursor: 'pointer' }}
            />
            <Grid item xs={12}>
              <Typography variant='h4' style={{ textAlign: 'center' }}>
                {category}
              </Typography>
            </Grid>
          </Grid>
          <CardItem meals={meals} />
        </div>
      )}
    </>
  );
};

export default RecipeCategory;
