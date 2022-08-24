import { Box, useTheme, useMediaQuery } from '@mui/material';
import QuestionCard from '../components/Question/QuestionCard';
import React from 'react';
import Result from '../components/Question/Result';

const Question = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const [result, setResult] = React.useState(null);

  return (
    <Box className={mobile ? '' : 'content'}>
      {result ? (
        <Box className='wrapper-result'>
          <Result result={result} />
        </Box>
      ) : (
        <Box className={mobile ? 'wrapper-card-mobile' : 'wrapper-card'}>
          <QuestionCard result={result} setResult={setResult} />
        </Box>
      )}
    </Box>
  );
};

export default Question;
