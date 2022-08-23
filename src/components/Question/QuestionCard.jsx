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
import english from '../../language/en-US.json';

const QuestionCard = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const handleNext = () => setCurrentQuestion((prev) => prev + 1);
  const handleBack = () => setCurrentQuestion((prev) => prev - 1);

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
        value={((currentQuestion + 1) / 7) * 100}
        color='warning'
        sx={{ borderRadius: 5, height: '7px' }}
      />
      <Typography variant='h4' sx={{ mt: 5, fontWeight: 500, mb: 5 }}>
        {english['Q' + currentQuestion]}
      </Typography>
      <Box sx={{ mb: 4 }}>
        <div className='selection selected'>
          <Typography variant='h5'>
            {english['Q' + currentQuestion + 'A']}
          </Typography>
        </div>
        <div className='selection '>
          <Typography variant='h5'>
            {english['Q' + currentQuestion + 'B']}
          </Typography>
        </div>
        <div className='selection '>
          <Typography variant='h5'>
            {english['Q' + currentQuestion + 'C']}
          </Typography>
        </div>
        <div className='selection '>
          <Typography variant='h5'>
            {english['Q' + currentQuestion + 'D']}
          </Typography>
        </div>
      </Box>
      <Stack direction='row' justifyContent='space-between'>
        <Button
          color='secondary'
          onClick={handleBack}
          disabled={currentQuestion === 0}
        >
          Go Back
        </Button>
        {currentQuestion === 6 ? (
          <Button
            color='warning'
            variant='contained'
            size='large'
            onClick={handleNext}
          >
            Finish!
          </Button>
        ) : (
          <Button
            color='warning'
            variant='contained'
            size='large'
            onClick={handleNext}
          >
            Next
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default QuestionCard;
