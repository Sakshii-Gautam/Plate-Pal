import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Typography } from '@mui/material';

const RecipeVideo = ({ meal }) => {
  return (
    <Box>
      <Typography variant='h5' fontWeight='bold' gutterBottom>
        Video
      </Typography>
      {meal?.strYoutube.length < 1 ? (
        <Typography>Sorry, No Video Available!</Typography>
      ) : (
        <ReactPlayer url={meal?.strYoutube} controls={true} width='100%' />
      )}
    </Box>
  );
};

export default RecipeVideo;
