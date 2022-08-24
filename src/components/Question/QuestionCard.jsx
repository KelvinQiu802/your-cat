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
import { calcResult } from '../../utils/tools';
import { useTheme, useMediaQuery } from '@mui/material';
import Result from './Result';

const QuestionCard = ({ result, setResult }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answer, setAnswer] = React.useState([]);

  const handleNext = () => setCurrentQuestion((prev) => prev + 1);
  const handleBack = () => setCurrentQuestion((prev) => prev - 1);
  const handleSelect = (e) => {
    const value = e.currentTarget.dataset.answer;
    setAnswer((prev) => {
      const copy = [...prev];
      copy[currentQuestion] = value;
      return copy;
    });
  };
  const handleFinish = () => {
    const result = calcResult(answer);
    console.log(result);
    setResult(result);
  };

  return (
    <Box
      sx={{
        margin: '0 auto',
        width: mobile ? '80%' : '600px',
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
      <Typography
        variant='h4'
        sx={{
          mt: 5,
          fontWeight: 500,
          mb: 5,
          fontSize: mobile ? '1.3em' : '2em',
        }}
      >
        {english['Q' + currentQuestion]}
      </Typography>
      <Box sx={{ mb: 4 }}>
        <div
          className={`selection ${
            answer[currentQuestion] === 'A' ? 'selected' : ''
          }`}
          data-answer='A'
          onClick={(e) => handleSelect(e)}
        >
          <Typography variant='h5' data-answer='A' sx={{ fontSize: '1.3em' }}>
            {english['Q' + currentQuestion + 'A']}
          </Typography>
        </div>
        <div
          className={`selection ${
            answer[currentQuestion] === 'B' ? 'selected' : ''
          }`}
          data-answer='B'
          onClick={(e) => handleSelect(e)}
        >
          <Typography variant='h5' data-answer='B' sx={{ fontSize: '1.3em' }}>
            {english['Q' + currentQuestion + 'B']}
          </Typography>
        </div>
        <div
          className={`selection ${
            answer[currentQuestion] === 'C' ? 'selected' : ''
          }`}
          data-answer='C'
          onClick={(e) => handleSelect(e)}
        >
          <Typography variant='h5' data-answer='C' sx={{ fontSize: '1.3em' }}>
            {english['Q' + currentQuestion + 'C']}
          </Typography>
        </div>
        <div
          className={`selection ${
            answer[currentQuestion] === 'D' ? 'selected' : ''
          }`}
          data-answer='D'
          onClick={(e) => handleSelect(e)}
        >
          <Typography variant='h5' data-answer='D' sx={{ fontSize: '1.3em' }}>
            {english['Q' + currentQuestion + 'D']}
          </Typography>
        </div>
      </Box>
      <Stack direction='row' justifyContent='space-between'>
        <Button
          color='secondary'
          onClick={handleBack}
          disabled={!currentQuestion}
        >
          Go Back
        </Button>
        {currentQuestion === 6 ? (
          <Button
            color='warning'
            variant='contained'
            size='large'
            onClick={handleFinish}
            disabled={!answer[currentQuestion]}
          >
            Finish!
          </Button>
        ) : (
          <Button
            color='warning'
            variant='contained'
            size='large'
            onClick={handleNext}
            disabled={!answer[currentQuestion]}
          >
            Next
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default QuestionCard;
