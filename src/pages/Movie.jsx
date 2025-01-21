import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams(); // Get the movie id from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data based on the id
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => r.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index} style={{ marginRight: "5px" }}>
              {genre}
            </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;