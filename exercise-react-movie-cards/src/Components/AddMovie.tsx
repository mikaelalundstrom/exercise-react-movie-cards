import { FormEvent, useRef } from "react";

interface IMovie {
  title: string;
  rating: string;
  genre: string;
  desc: string;
}

function AddMovie({ addMovie }: { addMovie: (movie: IMovie) => void }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLSelectElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(titleRef.current?.value);
    console.log(ratingRef.current?.value);
    console.log(genreRef.current?.value);
    console.log(descRef.current?.value);

    let addedMovie: IMovie = {
      title: titleRef.current!.value,
      rating: ratingRef.current!.value,
      genre: genreRef.current!.value,
      desc: descRef.current!.value,
    };

    addMovie(addedMovie);

    const formElem = event.target as HTMLFormElement;
    formElem.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="addMovie">
        <h1>Add a movie:</h1>
        <label htmlFor="titleInput">Title:</label>
        <input ref={titleRef} id="titleInput" type="text" required />
        <label htmlFor="ratingInput">Rating:</label>
        <div className="range-input">
          1 <input ref={ratingRef} type="range" min="1" max="5" id="ratingInput" required /> 5
        </div>

        <label htmlFor="genreInput">Genre:</label>
        <select ref={genreRef} id="genreInput" required>
          <option value="">--Please choose a Genre--</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Thriller">Thriller</option>
        </select>
        <label htmlFor="descInput">Description:</label>
        <textarea ref={descRef} id="descInput"></textarea>
        <div className="buttons">
          <button className="clear" type="reset">
            Clear
          </button>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}

export default AddMovie;
