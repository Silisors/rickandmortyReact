
import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Characters } from "./components/characters"; // Utiliza Characters en lugar de characterData
import { Pagination } from './components/Pagination';

function useCharacterData() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchCharacters = (url) => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters("https://rickandmortyapi.com/api/character");
  }, []);

  return { characters, info, loading, onPrevious, onNext };
}

function App() {
  const { characters, info, loading, onPrevious, onNext } = useCharacterData();

  return (
    <>
      <Navbar brand="rick and morty app" />

      <div className="container mt-5">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <>
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
            <Characters characters={characters} /> {/* Utiliza el componente Characters aquí */}
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
