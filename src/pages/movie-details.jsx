import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "cf0ac2dec34f1b7ed67c633f20a75d67",
            language: "pt-BR",
          },
        });
        setMovie(response.data);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id, navigate]);

  const saveMovie = () => {
    const savedMovies = JSON.parse(localStorage.getItem("@primeFlix")) || [];
    const movieAlreadySaved = savedMovies.some((item) => item.id === movie.id);

    if (movieAlreadySaved) {
      return toast.warn("Este filme já está na sua lista de favoritos.");
    }

    const updatedMoviesList = [
      ...savedMovies,
      { movie: movie.title, id: movie.id },
    ];
    localStorage.setItem("@primeFlix", JSON.stringify(updatedMoviesList));
    toast.success("Filme salvo com sucesso!");
  };

  if (error) {
    return (
      <span className="inline-block w-full pt-10 text-center font-medium">
        Desculpe, não foi póssivel encontrar este filme, voltando para Home.😵
      </span>
    );
  }

  if (loading) {
    return (
      <div className="mt-16 flex justify-center">
        <span className="inline-block h-10 w-10 animate-spin rounded-[50%] border-2 border-gray-400 border-b-transparent"></span>
      </div>
    );
  }

  return (
    <div className="m-auto mt-10 max-w-[700px] px-6">
      <h1 className="mb-3 text-2xl font-bold">{movie.title}</h1>
      <img
        className="mb-3 rounded"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />
      <span className="mb-2 inline-block text-lg font-bold">Sinopse</span>
      <p>{movie.overview}</p>
      <ul className="my-3 flex gap-3">
        {movie.genres.map((item) => (
          <li
            className="inline-block rounded-full bg-blue-500 px-2 py-1 text-white"
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <span className="font-bold">
        Avaliação: {movie.vote_average.toFixed(1)}
      </span>
      <div className="mt-3 flex gap-3">
        <button
          className="w-20 rounded bg-gray-300 py-2 font-medium transition-all hover:bg-gray-200"
          onClick={() => saveMovie()}
        >
          Salvar
        </button>
        <Link
          className="w-20 rounded bg-gray-300 py-2 text-center font-medium transition-all hover:bg-gray-200"
          to={`https://youtube.com/results?search_query=${movie.title} Trailer`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Trailer
        </Link>
      </div>
    </div>
  );
};
