export const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: '3rem',
    marginTop: '3rem',
  },
  cardMealName: {
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};
