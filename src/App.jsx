import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import SongManager from './Pages/MySongs/SongManager/SongManager';

const App = () => {
  const [songs, setSongs] = useState([]);

  const updateSongs = (updatedSongs) => {
    setSongs(updatedSongs);
  };

  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home songs={songs} />} />
        <Route path="/manage-songs" element={<SongManager updateSongs={updateSongs} songs={songs} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
