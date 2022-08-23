import { Box, useTheme, useMediaQuery } from '@mui/material';
import QuestionCard from '../components/Question/QuestionCard';

const Question = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className={mobile ? '' : 'wrapper-card'}>
      <QuestionCard />
    </Box>
  );
};

export default Question;
