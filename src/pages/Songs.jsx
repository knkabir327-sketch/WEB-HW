
import { useState } from "react";
import SongCard from "../components/SongCard";

function Songs({ songs, toggleSong }) {
  const [genre, setGenre] = useState("All");

  const filtered = songs.filter(song =>
    genre === "All" || song.genre === genre
  );

  return (
    <div>
      <h1>All Songs</h1>

      <select value={genre} onChange={e => setGenre(e.target.value)}>
        <option>All</option>
        <option>Romantic</option>
        <option>Motivational</option>
        <option>Sufi</option>
        <option>Punjabi</option>
      </select>

      {filtered.map(song => (
        <SongCard key={song.id} song={song} toggleSong={toggleSong} />
      ))}
    </div>
  );
}

export default Songs;
