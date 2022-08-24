import './App.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Pets } from '@mui/icons-material';
import { useTheme, useMediaQuery } from '@mui/material';

const App = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <nav className={mobile ? 'nav-bar-mobile' : 'nav-bar'}>
        <Pets
          color='warning'
          sx={{
            verticalAlign: 'middle',
            position: 'relative',
            bottom: '4px',
            fontSize: '2em',
          }}
        />
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'link-selected' : 'nav-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='all'
          className={({ isActive }) =>
            isActive ? 'link-selected' : 'nav-link'
          }
        >
          All Breeds
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default App;
