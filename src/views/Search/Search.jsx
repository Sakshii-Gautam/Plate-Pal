import {
  Box,
  FormControl,
  InputAdornment,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import CardItem from '../../components/CardItem/CardItem';
import {
  searchRecipeByCategory,
  searchRecipeByIngredient,
  searchRecipeByName,
  searchRecipeByRegion,
} from '../../services/food';
import { useDispatch, useSelector } from 'react-redux';
import { searchReset } from '../../features/foodSlice';

const Search = () => {
  const {
    foodRecipes: {
      foodRecipes: { meals },
      isLoading,
    },
  } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('');
  const isSearching = query.length > 0;

  const search = () => {
    if (searchType === 'name') dispatch(searchRecipeByName(query));
    if (searchType === 'ingredient') dispatch(searchRecipeByIngredient(query));
    if (searchType === 'category') dispatch(searchRecipeByCategory(query));
    if (searchType === 'region') dispatch(searchRecipeByRegion(query));
    if (!isSearching) dispatch(searchReset());
  };

  useEffect(() => {
    const searchingMeals = setTimeout(() => {
      search();
    }, 1000);

    return () => {
      clearTimeout(searchingMeals);
    };
  }, [query, searchType]);

  const handleSearch = () => {
    search();
  };

  return (
    <>
      <Box sx={styles.searchContainer}>
        {/* Search Field */}
        <TextField
          autoFocus
          variant='standard'
          placeholder='Search Meals...'
          value={query}
          sx={{ width: { xs: '50%', sm: '30%' } }}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='end'>
                <SearchIcon sx={styles.searchIcon} onClick={handleSearch} />
              </InputAdornment>
            ),
          }}
        />

        {/* Search Type */}
        <Box sx={styles.searchTypeContainer}>
          <FormControl sx={{ width: '250px' }} size='small'>
            <Select
              value={searchType}
              onChange={(e) => {
                setSearchType(e.target.value);
              }}
              displayEmpty
              MenuProps={{ style: { maxHeight: 300 } }}
            >
              <MenuItem value=''>
                <em>Select search type</em>
              </MenuItem>
              <MenuItem value='name'>Name</MenuItem>
              <MenuItem value='ingredient'>Ingredient</MenuItem>
              <MenuItem value='category'>Category</MenuItem>
              <MenuItem value='region'>Region</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Search Results */}
      {isLoading ? (
        <LinearProgress color='success' />
      ) : meals?.length > 0 ? (
        <CardItem meals={meals} />
      ) : (
        <Box sx={styles.searchResult}>
          <Typography variant='h4'>No results found!</Typography>
        </Box>
      )}
    </>
  );
};

export default Search;
