export const styles = {
  header: {
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '10rem',
    gap: '4rem',
  },

  brandLogo: {
    fontSize: '1.3rem',
  },

  searchContainer: {
    display: 'flex',
    height: '3rem',
    position: 'relative',
    flex: 0.5,
    boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.1)',
    border: 'none',
    borderRadius: '1rem',
  },

  select: {
    borderRadius: '1rem 0 0rem 1rem',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  searchContainerWrapper: {
    display: 'flex',
    width: '100%',
  },
  searchInput: {
    flex: 1,
    padding: '0.8rem',
    borderRadius: '0 1rem 1rem 0',
    outline: 'none',
    border: 'none',
  },
  searchIcon: {
    position: 'absolute',
    top: 0,
    transform: 'translateX(-40%) translateY(45%) rotate(-90deg)',
    right: '0px',
    cursor: 'pointer',
  },
  headerIconsContainer: {
    display: 'flex',
    gap: { xs: '2rem', sm: '4rem' },
    cursor: 'pointer',
  },
  headerIcon: {
    width: '3rem',
    height: '3rem',
  },
};
