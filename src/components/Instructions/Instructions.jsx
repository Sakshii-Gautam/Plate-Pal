import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { styles } from './styles';

const Instructions = ({ meal }) => {
  return (
    <div>
      <Typography variant='h5' fontWeight='bold'>
        Instructions
      </Typography>
      <List sx={styles.instructionsList}>
        {meal?.strInstructions.split('. ').map((step, index) => (
          <ListItem>
            <ListItemText primary={step} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Instructions;
