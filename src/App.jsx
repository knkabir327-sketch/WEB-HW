
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import songsData from "./data/songs";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import SongDetails from "./pages/SongDetails";
import Playlist from "./pages/Playlist";
import Navbar from "./components/Navbar";

function App() {
  const [songs, setSongs] = useState(songsData);

  function toggleSong(id) {
    setSongs(songs.map(song =>
      song.id === id
        ? { ...song, isInPlaylist: !song.isInPlaylist }
        : song
    ));
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home songs={songs} />} />
        <Route path="/songs" element={<Songs songs={songs} toggleSong={toggleSong} />} />
        <Route path="/songs/:id" element={<SongDetails songs={songs} />} />
        <Route path="/playlist" element={<Playlist songs={songs} toggleSong={toggleSong} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
