import React from 'react';
import './App.css';
import MediaTable from './components/MediaTable';

// eslint-disable-next-line require-jsdoc
const App = () => {
  return (
    <MediaTable media={picArray}/>
  );
};

export default App;
