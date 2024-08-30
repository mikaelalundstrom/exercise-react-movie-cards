import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";

interface IMovie {
  title: string;
  rating: string;
  genre: string;
  desc: string;
}

export function App() {
  const [movieList, setMovieList] = useState<IMovie[]>([]);

  const addMovieToList = (movie: IMovie) => {
    console.log(movie);

    setMovieList([...movieList, movie]);
    console.log(movieList);
  };

  const removeMovie = (title: string) => {
    let index = movieList.findIndex((book) => book.title === title);
    let updatedMovieList = [...movieList];
    updatedMovieList.splice(index, 1);
    setMovieList(updatedMovieList);
  };
  return (
    <>
      <AddMovie addMovie={addMovieToList} />
      <MovieList movieList={movieList} removeMovie={removeMovie} />
    </>
  );
}
