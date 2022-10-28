import { useEffect, useContext } from 'react';
import CardFilm from '../CardFilm';
import context from '../../context/context';

export default function GridFilms() {
  const API_URL =
    'https://api.themoviedb.org/3/movie/popular?api_key=2144bd158d80b0f377d5c7aa9133f2f9';

  const { filmsList, setFilmsList, search } = useContext(context);


  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFilmsList(data.results);
      });
  }, [setFilmsList]);

  return (
    <div>
      {!search && filmsList.length > 0 && (
        <div className="grid">
          {filmsList.map((film) => (
            <CardFilm key={film.id} film={film} />
          ))}
        </div>
      )}
      {!!search && filmsList.length > 0 && (
        <div className="grid">
          {filmsList.filter((film) => (film.title.toLowerCase().includes(search.toLowerCase())
          )).map((film) => (
            <CardFilm key={film.id} film={film} />
          ))}
        </div>
      )}

    </div>
  );
}
