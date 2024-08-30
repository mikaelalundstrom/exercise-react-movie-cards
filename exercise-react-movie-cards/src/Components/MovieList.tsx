import MovieCard from "./MovieCard";

interface IMovie {
  title: string;
  rating: string;
  genre: string;
  desc: string;
}

function MovieList({
  movieList,
  removeMovie,
}: {
  movieList: IMovie[];
  removeMovie: (title: string) => void;
}) {
  return (
    <>
      <section className="movieList">
        {movieList.map((movie, i) => (
          <MovieCard key={i} movie={movie} removeMovie={removeMovie} />
        ))}
      </section>
    </>
  );
}

export default MovieList;
