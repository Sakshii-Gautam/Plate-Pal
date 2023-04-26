const styles = {
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    margin: '3rem auto 0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    cursor: 'pointer',
    marginRight: '1rem',
    '&:hover': {
      transform: 'translateY(-1px)',
    },
  },
  searchTypeContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',
    flexDirection: { xs: 'column', xs_sm: 'row' },
  },
  searchResult: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10rem',
  },
};

export default styles;
