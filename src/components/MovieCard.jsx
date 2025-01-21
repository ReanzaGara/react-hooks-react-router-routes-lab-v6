import { Link } from 'react-router-dom';

function MovieCard({ id, title, genres }) {
  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Info</Link>
      <p>
        {genres.map((genre) => (
          <span key={genre}>{genre} </span>  
        ))}
        
      </p>
    </article>
  );
}

export default MovieCard;