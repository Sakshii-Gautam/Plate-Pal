import React, { useEffect, useState } from 'react';
import {
  Ingredients,
  Instructions,
  RecipeVideo,
  RecipeImage,
  CardItem,
} from '../../components';
import { styles } from './styles';
import { Grid, LinearProgress, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodByArea, getRecipeDetailsById } from '../../services/food';
import { ArrowBack, Bookmark, BookmarkAddOutlined } from '@mui/icons-material';

const RecipeDetail = () => {
  const {
    foodDetails: {
      foodDetails: { meals },
      isLoading: isLoadingFoodDetails,
    },
    area: {
      area: { meals: similarMeals },
    },
  } = useSelector((state) => state.food);

  const [isSaved, setIsSaved] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingSavedRecipes =
    JSON.parse(localStorage.getItem('userSavedRecipes')) || [];

  const isRecipeSaved = existingSavedRecipes.some(
    (recipe) => recipe.idMeal === id
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    dispatch(getRecipeDetailsById(id));
    dispatch(getFoodByArea(meals?.[0].strArea));
    if (isRecipeSaved) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [id]);

  const handleRecipeSave = () => {
    if (!isSaved && !isRecipeSaved) {
      const updatedSavedRecipes = [...existingSavedRecipes, ...meals];
      localStorage.setItem(
        'userSavedRecipes',
        JSON.stringify(updatedSavedRecipes)
      );
      setIsSaved(true);
    } else if (isSaved || isRecipeSaved) {
      const updatedSavedRecipes = existingSavedRecipes.filter(
        (recipe) => recipe.idMeal !== id
      );
      localStorage.setItem(
        'userSavedRecipes',
        JSON.stringify(updatedSavedRecipes)
      );
      setIsSaved(false);
    }
  };

  return (
    <>
      {isLoadingFoodDetails ? (
        <LinearProgress color='success' />
      ) : (
        <>
          <div style={styles.recipeDetail}>
            <div>
              <Grid
                container
                spacing={5}
                style={{ marginLeft: '0', width: '100%' }}
              >
                <Grid item xs={12} style={{ paddingLeft: '0' }}>
                  <div style={styles.topIconContainer}>
                    <ArrowBack
                      fontSize='large'
                      onClick={() => navigate(-1)}
                      sx={{ cursor: 'pointer' }}
                    />
                    {isSaved || isRecipeSaved ? (
                      <Bookmark
                        fontSize='large'
                        onClick={handleRecipeSave}
                        sx={{ cursor: 'pointer' }}
                      />
                    ) : (
                      <BookmarkAddOutlined
                        fontSize='large'
                        onClick={handleRecipeSave}
                        sx={{ cursor: 'pointer' }}
                      />
                    )}
                  </div>
                  <Typography variant='h5' style={styles.mealName}>
                    {meals?.[0].strMeal}
                  </Typography>
                  <hr />
                  <div style={styles.mealImgContainer}>
                    <RecipeImage meal={meals?.[0]} />
                  </div>
                </Grid>

                <Grid
                  mt={6}
                  container
                  style={styles.recipeDetailsContentWrapper}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    sx={styles.recipeDetailsContentLeft}
                  >
                    <Ingredients meal={meals?.[0]} />
                    <RecipeVideo meal={meals?.[0]} />
                  </Grid>
                  <Grid item xs={12} lg={5}>
                    <Instructions meal={meals?.[0]} />
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>

          <div style={{ padding: '5rem' }}>
            {similarMeals?.length > 0 && (
              <>
                <Typography variant='h5' gutterBottom>
                  You might also like
                </Typography>

                <CardItem meals={similarMeals.slice(0, 18)} />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default RecipeDetail;
