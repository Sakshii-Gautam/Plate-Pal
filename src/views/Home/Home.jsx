import {
  Grid,
  Typography,
  Box,
  useMediaQuery,
  createTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import images from '../../assets/constants/images';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFoodByArea,
  getFoodCategories,
  getFoodsByCategory,
  getRandomFood,
} from '../../services/food';
import { useNavigate } from 'react-router-dom';
import { CardItem } from '../../components';
import { ViewRecipesLink, styles } from './styles';

const Home = () => {
  const {
    categories: {
      categories: { categories },
    },
    area: {
      area: { meals },
    },
    category: {
      category: { meals: categorizedMeals },
    },
    random: {
      random: { meals: randomMeals },
    },
  } = useSelector((state) => state.food);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    dispatch(getFoodCategories());
    dispatch(getFoodByArea('Indian'));
    dispatch(getFoodsByCategory('dessert'));
    dispatch(getRandomFood('Miscellaneous'));
  }, []);

  return (
    <Box sx={styles.home}>
      <Box sx={styles.heroContainer}>
        <Grid container sx={styles.hero}>
          <Grid item xs={12} md={6}>
            <Box sx={styles.heroLeft}>
              <Typography variant={isSmallScreen ? 'h4' : 'h3'}>
                Unleash Your Culinary Creativity with Our Recipes
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: 'gray', fontWeight: 300 }}
              >
                Cook up a storm with our blend of traditional and modern flavors
                that will surprise and delight your taste buds.
              </Typography>
              <ViewRecipesLink href='#viewRecipes'>
                View Recipes
              </ViewRecipesLink>
            </Box>
          </Grid>
          <img
            style={{ width: '30rem' }}
            src={images.food_1}
            alt='Recipe Card'
          />
        </Grid>
      </Box>

      <Box sx={{ padding: '5rem' }}>
        <Typography variant='h4' id='viewRecipes'>
          Popular Category
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: '5rem' }}>
          {categories
            ?.slice(0, 12)
            .reverse()
            .map((category, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={2}
                onClick={() => {
                  dispatch(getFoodsByCategory(category?.strCategory));
                  navigate(`/recipeCategory/${category?.strCategory}`);
                }}
                sx={styles.mealCategoryContainer}
              >
                <Box
                  component='img'
                  src={category?.strCategoryThumb}
                  alt={category?.strCategory}
                  sx={styles.mealCategory}
                />
                <Typography variant='h6' align='center'>
                  {category?.strCategory}
                </Typography>
              </Grid>
            ))}
        </Grid>
      </Box>

      <Box sx={{ padding: '5rem' }}>
        <Typography variant='h4'>Let's try out some Indian</Typography>
        <Grid
          container
          sx={{ marginTop: '5rem' }}
          rowSpacing={3}
          columnSpacing={10}
        >
          {meals?.slice(1, 9).map((meal) => (
            <Grid item key={meal?.idMeal} xs={12} sm={6} md={4} lg={3}>
              <RecipeCard
                mealId={meal?.idMeal}
                mealName={meal?.strMeal}
                mealImage={meal?.strMealThumb}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ padding: '5rem' }}>
        <Typography variant='h4'>
          Unpredictable Eats: Our Random Meal Selections
        </Typography>

        <Box sx={{ marginTop: '5rem' }}>
          <CardItem meals={randomMeals} />
        </Box>
      </Box>

      <Box sx={{ padding: '5rem' }}>
        <Typography variant='h4'>Dessert Delights</Typography>
        <Grid
          container
          sx={{ marginTop: '5rem' }}
          rowSpacing={3}
          columnSpacing={10}
        >
          {categorizedMeals?.slice(0, 8).map((meal) => (
            <Grid item key={meal?.idMeal} xs={12} sm={6} md={4} lg={3}>
              <RecipeCard
                mealId={meal?.idMeal}
                mealName={meal?.strMeal}
                mealImage={meal?.strMealThumb}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
