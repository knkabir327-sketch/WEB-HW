
import { Link } from "react-router";

function SongCard({ song, toggleSong }) {
  return (
    <div>
      <h3>{song.title}</h3>
      <p>{song.artist} | {song.genre}</p>
      <p>{Math.floor(song.duration / 60)}:{String(song.duration % 60).padStart(2, "0")}</p>

      {song.streams >= 1000000 && <p>XQXX Trending</p>}

      <Link to={`/songs/${song.id}`}>Details</Link>
      <button onClick={() => toggleSong(song.id)}>
        {song.isInPlaylist ? "Remove from Playlist" : "Add to Playlist"}
      </button>
    </div>
  );
}

export default SongCard;
