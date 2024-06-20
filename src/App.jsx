import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
        <Switch>
          <Route path="/" exact>
            <Home songs={songs} />
          </Route>
          <Route path="/manage-songs">
            <SongManager updateSongs={updateSongs} songs={songs} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
