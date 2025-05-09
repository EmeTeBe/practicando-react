export const ListOfMovies = ({ movies }) => {
  return (
    <ul className="movies-list">
      {movies.map((movie) => (
        <li className="movie-title" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
};

export const NoMoviesResults = () => {
  return (
    <div className="no-results">
      <h2>No se encontraron resultados</h2>
      <img
        src="https://media.giphy.com/media/3o7aD2sa1j0v4x5Y6I/giphy.gif"
        alt="Gif No results"
      />
    </div>
  );
};

export const Movies = ({ movies }) => {
  const hasResults = movies?.length > 0;

  return hasResults ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
};
