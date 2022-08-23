import {
  Box,
  Typography,
  Stack,
  Tooltip,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import catImg from '../images/home-cat.svg';
import Welcome from '../components/Home/Welcome';

const Home = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className={mobile ? '' : 'wrapper'}>
      <Stack
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        className={mobile ? '' : 'content'}
      >
        <Welcome />
        <Tooltip title='@designed by Freepik' placement='top-start'>
          <a href='https://www.freepik.com' target='_blank'>
            <img
              src={catImg}
              alt='Cat Image'
              width='600px'
              style={{ display: mobile ? 'none' : 'flex' }}
            />
          </a>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default Home;
