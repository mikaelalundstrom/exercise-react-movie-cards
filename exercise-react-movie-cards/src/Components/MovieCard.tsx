interface IMovie {
  title: string;
  rating: string;
  genre: string;
  desc: string;
}

function MovieCard({
  movie,
  removeMovie,
}: {
  key: number;
  movie: IMovie;
  removeMovie: (title: string) => void;
}) {
  return (
    <>
      <article onClick={() => removeMovie(movie.title)} className="MovieCard">
        <h2 className="title">{movie.title}</h2>
        <p className="rating">{movie.rating}/5</p>
        <p className="genre">
          <hr />
          {movie.genre}
        </p>
        <p className="desc">{movie.desc}</p>
      </article>
    </>
  );
}

export default MovieCard;
