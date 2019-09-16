import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Nav = props => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="nav">
      <h1>Womens World Cup Players By Searches</h1>
      <button onClick={toggleMode} data-testid="dark-mode">
        Dark Mode
      </button>
    </div>
  );
};

export default Nav;
