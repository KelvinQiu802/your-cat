import { Card, CardContent, Stack, Typography, Box } from '@mui/material';

const Welcome = () => {
  return (
    <Stack>
      <Typography
        variant='h1'
        sx={{ fontWeight: 400, mb: '-20px', fontStyle: 'italic' }}
      >
        Choose
      </Typography>
      <Typography
        variant='h1'
        sx={{
          fontWeight: 500,
          fontStyle: 'italic',
          mb: 1.8,
        }}
      >
        Your <span style={{ color: '#FEA130' }}>Cat</span>
      </Typography>
      <Typography
        variant='p'
        color='text.secondary'
        sx={{ width: '400px', ml: 1.5, fontSize: '1.2em' }}
      >
        This site will help you to choose the best breed of cat for you{' '}
        <strong>
          <i>by asking you a few questions.</i>
        </strong>
      </Typography>
    </Stack>
  );
};

export default Welcome;
