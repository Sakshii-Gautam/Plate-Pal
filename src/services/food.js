import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

export const getFoodCategories = createAsyncThunk(
  'food/getFoodCategories',
  async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/categories.php`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const getFoodByArea = createAsyncThunk(
  'food/getFoodByArea',
  async (area) => {
    try {
      const { data } = await axios.get(`${baseUrl}/filter.php?a=${area}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const getFoodsByCategory = createAsyncThunk(
  'food/getFoodsByCategory',
  async (category) => {
    try {
      const { data } = await axios.get(`${baseUrl}/filter.php?c=${category}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const getRandomFood = createAsyncThunk(
  'food/getRandomFood',
  async (random) => {
    try {
      const { data } = await axios.get(`${baseUrl}/filter.php?c=${random}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const getRecipeDetailsById = createAsyncThunk(
  'food/getRecipeDetailsById',
  async (id) => {
    try {
      const { data } = await axios.get(`${baseUrl}/lookup.php?i=${id}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const searchRecipeByName = createAsyncThunk(
  'food/searchRecipeByName',
  async (searchQuery) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/search.php?s=${searchQuery}`
      );
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const searchRecipeByIngredient = createAsyncThunk(
  'food/searchRecipeByIngredient',
  async (searchQuery) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/filter.php?i=${searchQuery}`
      );
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const searchRecipeByCategory = createAsyncThunk(
  'food/searchRecipeByCategory',
  async (searchQuery) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/filter.php?c=${searchQuery}`
      );
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const searchRecipeByRegion = createAsyncThunk(
  'food/searchRecipeByRegion',
  async (searchQuery) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/filter.php?a=${searchQuery}`
      );
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);
