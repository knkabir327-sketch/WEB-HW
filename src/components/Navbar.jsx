
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <h2>Music Playlist</h2>
      <Link to="/">Home</Link> |{" "}
      <Link to="/songs">Songs</Link> |{" "}
      <Link to="/playlist">Playlist</Link>
    </nav>
  );
}

export default Navbar;
