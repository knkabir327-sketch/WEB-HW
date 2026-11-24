
import { useParams } from "react-router";

function SongDetails({ songs }) {
  const { id } = useParams();
  const song = songs.find(s => s.id === Number(id));

  if (!song) return <h2>Song not found</h2>;

  return (
    <div>
      <h1>{song.title}</h1>
      <p>Artist: {song.artist}</p>
      <p>Album: {song.album}</p>
      <p>Genre: {song.genre}</p>
      <p>Year: {song.year}</p>
      <p>Streams: {song.streams}</p>
    </div>
  );
}

export default SongDetails;
