import { Box, Typography, Stack } from '@mui/material';
import catImg from '../images/home-cat.svg';
import Welcome from '../components/Home/Welcome';

const Home = () => {
  return (
    <Box className='wrapper'>
      <Stack
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        className='content'
      >
        <Welcome />
        <img src={catImg} alt='Cat Image' width='600px' />
      </Stack>
    </Box>
  );
};

export default Home;
