import SongCard from "../components/SongCard";

function Playlist({ songs, toggleSong }) {
  const playlist = songs.filter(song => song.isInPlaylist);

  return (
    <div>
      <h1>My Playlist</h1>

      {playlist.length === 0 ? (
        <p>No songs added yet.</p>
      ) : (
        <div>
          <p>Total Songs: {playlist.length}</p>

          {playlist.map(song => (
            <SongCard key={song.id} song={song} toggleSong={toggleSong} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Playlist;