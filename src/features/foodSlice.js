import { createSlice } from '@reduxjs/toolkit';
import {
  getFoodByArea,
  getFoodCategories,
  getRecipeDetailsById,
  getFoodsByCategory,
  getRandomFood,
  searchRecipeByName,
  searchRecipeByIngredient,
  searchRecipeByCategory,
  searchRecipeByRegion,
} from '../services/food';

const initialState = {
  foodDetails: {
    foodDetails: [],
    isLoading: false,
    isError: false,
  },
  categories: {
    categories: [],
    isLoading: false,
    isError: false,
  },
  area: {
    area: [],
    isLoading: false,
    isError: false,
  },
  category: {
    category: [],
    isLoading: false,
    isError: false,
  },
  random: {
    random: [],
    isLoading: false,
    isError: false,
  },
  foodRecipes: {
    foodRecipes: [],
    isLoading: false,
    isError: false,
  },
};

const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    searchReset: (state) => {
      state.foodRecipes.foodRecipes = [];
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getFoodCategories.pending, (state) => {
        state.categories.isLoading = true;
      })
      .addCase(getFoodCategories.fulfilled, (state, action) => {
        state.categories.isLoading = false;
        state.categories.categories = action.payload;
      })
      .addCase(getFoodCategories.rejected, (state) => {
        state.categories.isLoading = false;
        state.categories.isError = true;
      })

      .addCase(getFoodByArea.pending, (state) => {
        state.area.isLoading = true;
      })
      .addCase(getFoodByArea.fulfilled, (state, action) => {
        state.area.isLoading = false;
        state.area.area = action.payload;
      })
      .addCase(getFoodByArea.rejected, (state) => {
        state.area.isLoading = false;
        state.area.isError = true;
      })

      .addCase(getFoodsByCategory.pending, (state) => {
        state.category.isLoading = true;
      })
      .addCase(getFoodsByCategory.fulfilled, (state, action) => {
        state.category.isLoading = false;
        state.category.category = action.payload;
      })
      .addCase(getFoodsByCategory.rejected, (state) => {
        state.category.isLoading = false;
        state.category.isError = true;
      })

      .addCase(getRandomFood.pending, (state) => {
        state.random.isLoading = true;
      })
      .addCase(getRandomFood.fulfilled, (state, action) => {
        state.random.isLoading = false;
        state.random.random = action.payload;
      })
      .addCase(getRandomFood.rejected, (state) => {
        state.random.isLoading = false;
        state.random.isError = true;
      })

      .addCase(getRecipeDetailsById.pending, (state) => {
        state.foodDetails.isLoading = true;
      })
      .addCase(getRecipeDetailsById.fulfilled, (state, action) => {
        state.foodDetails.isLoading = false;
        state.foodDetails.foodDetails = action.payload;
      })
      .addCase(getRecipeDetailsById.rejected, (state) => {
        state.foodDetails.isLoading = false;
        state.foodDetails.isError = true;
      })

      .addCase(searchRecipeByName.pending, (state) => {
        state.foodRecipes.isLoading = true;
      })
      .addCase(searchRecipeByName.fulfilled, (state, action) => {
        state.foodRecipes.isLoading = false;
        state.foodRecipes.foodRecipes = action.payload;
      })
      .addCase(searchRecipeByName.rejected, (state) => {
        state.foodRecipes.isLoading = false;
        state.foodRecipes.isError = true;
      })

      .addCase(searchRecipeByIngredient.pending, (state) => {
        state.foodRecipes.isLoading = true;
      })
      .addCase(searchRecipeByIngredient.fulfilled, (state, action) => {
        state.foodRecipes.isLoading = false;
        state.foodRecipes.foodRecipes = action.payload;
      })
      .addCase(searchRecipeByIngredient.rejected, (state) => {
        state.foodRecipes.isLoading = false;
        state.foodRecipes.isError = true;
      })

      .addCase(searchRecipeByCategory.pending, (state) => {
        state.foodRecipes.isLoading = true;
      })
      .addCase(searchRecipeByCategory.fulfilled, (state, action) => {
        state.foodRecipes.isLoading = false;
        state.foodRecipes.foodRecipes = action.payload;
      })
      .addCase(searchRecipeByCategory.rejected, (state) => {
        state.foodRecipes.isLoading = false;
        state.foodRecipes.isError = true;
      })

      .addCase(searchRecipeByRegion.pending, (state) => {
        state.foodRecipes.isLoading = true;
      })
      .addCase(searchRecipeByRegion.fulfilled, (state, action) => {
        state.foodRecipes.isLoading = false;
        state.foodRecipes.foodRecipes = action.payload;
      })
      .addCase(searchRecipeByRegion.rejected, (state) => {
        state.foodRecipes.isLoading = false;
        state.foodRecipes.isError = true;
      });
  },
});
export const { searchReset } = foodSlice.actions;
export { foodSlice };
