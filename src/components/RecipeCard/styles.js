export const styles = {
  cardMedia: {
    cursor: 'pointer',
    transition: 'transform 0.4s ease-in-out',
    transformOrigin: 'center',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  cardTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  },
};
