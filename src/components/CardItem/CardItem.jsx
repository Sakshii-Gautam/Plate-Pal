import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

const CardItem = ({ meals }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ marginTop: '5rem' }}>
      <Grid container justifyContent='center'>
        {meals?.map((meal) => (
          <Grid
            key={meal?.idMeal}
            item
            xs={12}
            sm={6}
            md={2}
            sx={styles.cardContainer}
          >
            <Box
              sx={{ padding: '1rem', width: '20rem' }}
              onClick={() => navigate(`/recipeDetail/${meal.idMeal}`)}
            >
              <Box>
                <img
                  src={meal?.strMealThumb}
                  alt='img'
                  style={styles.cardImage}
                />
              </Box>
              <div>
                <Typography variant='subtitle1' sx={styles.cardMealName}>
                  {meal?.strMeal}
                </Typography>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardItem;
