import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

const RecipeCard = ({ mealId, mealName, mealImage }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardMedia
        component='img'
        height='180'
        image={mealImage}
        alt='Recipe Card'
        onClick={() => navigate(`/recipeDetail/${mealId}`)}
        sx={styles.cardMedia}
      />
      <CardContent>
        <Typography
          align='center'
          variant='subtitle1'
          style={styles.cardTitle}
          onClick={() => navigate(`/recipeDetail/${mealId}`)}
        >
          {mealName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
