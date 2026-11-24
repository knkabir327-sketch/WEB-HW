
function Home({ songs }) {
  return (
    <div>
      <h1>Music Playlist</h1>
      <p>Explore songs and create your own playlist.</p>

      <h3>Total Songs: {songs.length}</h3>
      <h3>Playlist Songs: {songs.filter(s => s.isInPlaylist).length}</h3>
      <h3>Trending Songs: {songs.filter(s => s.streams >= 1000000).length}</h3>
    </div>
  );
}

export default Home;
