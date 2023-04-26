import React from 'react';

const RecipeImage = ({ meal }) => {
  return (
    <>
      <img
        src={meal?.strMealThumb}
        alt='recipe-image'
        style={{
          width: '100%',
          height: 500,
          objectFit: 'cover',
          borderRadius: '1rem',
        }}
      />
    </>
  );
};

export default RecipeImage;
