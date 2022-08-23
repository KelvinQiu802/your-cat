import {
  Stack,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import catImage from '../../images/home-cat.svg';

const Welcome = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = () => {
    navigate('/question');
  };

  return (
    <Stack alignItems='center'>
      <Typography
        variant='h1'
        sx={{
          fontWeight: 400,
          mb: mobile ? '-10px' : '-20px',
          fontStyle: 'italic',
          fontSize: mobile ? '3em' : '5.5em',
        }}
      >
        Choose{' '}
        <span
          style={{ fontStyle: 'normal', display: mobile ? 'none' : 'inline' }}
        >
          🐈
        </span>
      </Typography>
      <Typography
        variant='h1'
        sx={{
          fontWeight: 500,
          fontStyle: 'italic',
          mb: 1.8,
          fontSize: mobile ? '4em' : '6.9em',
        }}
      >
        Your <span style={{ color: '#FEA130' }}>Cat</span>
      </Typography>
      <Typography
        variant='p'
        color='text.secondary'
        sx={{
          width: mobile ? '300px' : '400px',
          ml: 1.5,
          fontSize: mobile ? '0.9em' : '1.2em',
        }}
      >
        This site will help you to choose the best breed of cat for you{' '}
        <strong>
          <i>by asking you a few questions.</i>
        </strong>
      </Typography>
      {mobile && (
        <img src={catImage} width='300px' style={{ marginTop: '10px' }} />
      )}
      <Button
        variant='outlined'
        sx={{
          borderRadius: 5,
          mt: mobile ? 2 : 3,
          fontSize: '1.2em',
          fontWeight: 500,
        }}
        color='warning'
        size='big'
        onClick={handleClick}
        fullWidth
      >
        Let's Start!
      </Button>
    </Stack>
  );
};

export default Welcome;
