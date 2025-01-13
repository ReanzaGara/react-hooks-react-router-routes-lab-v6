import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {v4 as uuidv4} from 'uuid';

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then((data) => setActors(data))
      .catch((error) => console.error(error));
  }, []);

  if (!actors) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
          {actors.map((actor) => {
            return (
              <article key={uuidv4()}>
                <h2>{actor.name}</h2>
                <ul>
                  {actor.movies.map((movie) => (
                    <li key={uuidv4()}>{movie}</li>
                  ))}
                </ul>
              </article>
            )
          })}
      </main>
    </>
  );
}

export default Actors;