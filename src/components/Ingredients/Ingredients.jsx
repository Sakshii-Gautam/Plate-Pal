import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { styles } from './styles';

const Ingredients = ({ meal }) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal?.[`strIngredient${i}`];
    const measure = meal?.[`strMeasure${i}`];

    if (ingredient && measure) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div>
      <Typography variant='h5' fontWeight='bold'>
        Ingredients
      </Typography>
      <List ordered sx={styles.ingredientsList}>
        {ingredients.map((ingredient, index) => (
          <ListItem key={index}>{ingredient}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default Ingredients;
