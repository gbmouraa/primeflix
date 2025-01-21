import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const Favorite = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = () => {
      const savedMovies = JSON.parse(localStorage.getItem("@primeFlix")) || [];
      if (savedMovies.length === 0) return;
      setMovies(savedMovies);
    };

    loadMovies();
  }, []);

  const deleteMovie = (id) => {
    const newMovieList = movies.filter((item) => item.id !== id);
    localStorage.setItem("@primeFlix", JSON.stringify(newMovieList));
    setMovies(newMovieList);
    toast.success("Filme apagado com sucesso.");
  };

  return (
    <div className="mt-10 flex justify-center px-6">
      {movies.length > 0 ? (
        <ul className="flex w-full max-w-[480px] flex-col gap-y-3">
          {movies.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded bg-gray-50 p-4"
            >
              <span className="text-lg font-medium">{item.movie}</span>
              <div>
                <Link
                  className="text-blue-500"
                  to={`/movie-details/${item.id}`}
                >
                  Ver filme
                </Link>
                <button
                  className="ml-3 text-red-500"
                  onClick={() => deleteMovie(item.id)}
                >
                  Apagar
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <span>Você não possui nenhum filme salvo.</span>
      )}
    </div>
  );
};
