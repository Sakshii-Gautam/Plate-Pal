import React from 'react';
import { Header, Private } from './components';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Login,
  RecipeCategory,
  Profile,
  RecipeDetail,
  Search,
  Signup,
  SavedRecipes,
} from './views';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontSize: 16,
    fontFamily: 'Poppins, sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>
        <Header />
        <Routes>
          <Route element={<Private />}>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/savedRecipes' element={<SavedRecipes />} />
            <Route path='/search' element={<Search />} />
            <Route path='/recipeDetail/:id' element={<RecipeDetail />} />
            <Route
              path='/recipeCategory/:category'
              element={<RecipeCategory />}
            />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
