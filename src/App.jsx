import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import SongManager from './Pages/MySongs/SongManager/SongManager';
import { Nav1 } from './State/Nav';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [songs, setSongs] = useState([]);

  const updateSongs = (updatedSongs) => {
    setSongs(updatedSongs);
  };

  return (
    <div>
        <Header />
        <Home />
        <Footer />
    </div>
  );
};

export default App;
