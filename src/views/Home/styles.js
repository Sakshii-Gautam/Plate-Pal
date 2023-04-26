import { styled } from '@mui/material';

export const styles = {
  home: {
    display: 'flex',
    flexDirection: 'column',
  },
  heroContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: 'url("../../assets/images/food_1.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100%',
    backgroundSize: 'contain',
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heroLeft: {
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem',
    justifyContent: 'center',
  },
  mealCategoryContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  mealCategory: {
    width: '20rem',
    height: '13rem',
    borderRadius: '50%',
  },
};

export const ViewRecipesLink = styled('a')({
  color: 'black',
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  alignSelf: 'flex-start',
  textTransform: 'uppercase',
  letterSpacing: '0.2rem',
  cursor: 'pointer',
  textDecoration: 'none',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    width: '50%',
    height: '2px',
    bottom: '-2px',
    left: '0',
    backgroundColor: 'black',
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover': {
    '&::before': {
      width: '100%',
      transform: 'scaleX(1)',
    },
  },
});
