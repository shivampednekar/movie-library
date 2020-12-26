import React from 'react';

import useDarkMode from '../useDarkMode';

const DarkModeToogle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <>
      <div className="darkmode">
        <span className="darkmode__text">Dark Mode:</span>
        <input
          name="checkbox"
          type="checkbox"
          className="switch"
          id="switch"
          checked={darkMode}
          onClick={() =>
            darkMode === false ? setDarkMode(true) : setDarkMode(false)
          }
        />
        <label htmlFor="switch"></label>
      </div>
    </>
  );
};

export default DarkModeToogle;
