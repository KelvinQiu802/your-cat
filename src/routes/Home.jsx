import { Box, Typography, Stack } from '@mui/material';
import catImg from '../images/home-cat.svg';

const Home = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center'>
      <Typography variant='h1'>Home</Typography>
      <img src={catImg} alt='' />
    </Stack>
  );
};

export default Home;
