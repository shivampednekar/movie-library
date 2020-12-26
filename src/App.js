import React from 'react';

import DarkModeToogle from './components/DarkMode/DarkModeToogle/darkModeToogle';
import SerachBar from './components/SearchBar/serachBar';

const App = () => {
  return (
    <main className="Wrapper">
      <DarkModeToogle />
      <SerachBar />
    </main>
  );
};

export default App;
