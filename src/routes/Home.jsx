import { Box, Typography, Stack, Tooltip, Button } from '@mui/material';
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
        <Tooltip title='@designed by Freepik' placement='top-start'>
          <a href='https://www.freepik.com' target='_blank'>
            <img src={catImg} alt='Cat Image' width='600px' />
          </a>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default Home;
