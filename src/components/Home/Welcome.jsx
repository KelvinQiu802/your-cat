import { Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/question');
  };

  return (
    <Stack>
      <Typography
        variant='h1'
        sx={{ fontWeight: 400, mb: '-20px', fontStyle: 'italic' }}
      >
        Choose <span style={{ fontStyle: 'normal' }}>🐈</span>
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
      <Button
        variant='outlined'
        sx={{
          borderRadius: 5,
          mt: 3,
          fontSize: '1.2em',
          fontWeight: 500,
        }}
        color='warning'
        size='big'
        onClick={handleClick}
      >
        Let's Start!
      </Button>
    </Stack>
  );
};

export default Welcome;
