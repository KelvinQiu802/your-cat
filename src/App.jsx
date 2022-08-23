import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <nav className='nav-bar'>
        <NavLink to='/' className='nav-link'>
          Home
        </NavLink>
        <NavLink to='all' className='nav-link'>
          All Breeds
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default App;
