import {
  Box,
  Button,
  Card,
  LinearProgress,
  Paper,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const QuestionCard = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  return (
    <Box
      sx={{
        margin: '0 auto',
        width: '600px',
        mt: 5,
        p: 4,
      }}
    >
      <LinearProgress
        variant='determinate'
        value={50}
        color='warning'
        sx={{ borderRadius: 5, height: '7px' }}
      />
      <Typography variant='h4' sx={{ mt: 5, fontWeight: 500, mb: 5 }}>
        What is your name?asldkjasldkjasldkjalsdkjalskdjalskdjalskdj
        asdlkajsdlkasjdlaksjdlaskdjsa
      </Typography>
      <Box sx={{ mb: 4 }}>
        <div className='selection selected'>
          <Typography variant='h5'>A. Good</Typography>
        </div>
        <div className='selection '>
          <Typography variant='h5'>A. Good</Typography>
        </div>
        <div className='selection '>
          <Typography variant='h5'>A. Good</Typography>
        </div>
        <div className='selection '>
          <Typography variant='h5'>A. Good</Typography>
        </div>
      </Box>
      <Stack direction='row' justifyContent='space-between'>
        <Button color='secondary'>Go Back</Button>
        <Button color='warning' variant='contained' size='large'>
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default QuestionCard;
