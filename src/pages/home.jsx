import { useEffect, useState } from "react";
import { api } from "../api";
import { Movie } from "../components/movie";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await api.get("movie/now_playing", {
          params: {
            api_key: "cf0ac2dec34f1b7ed67c633f20a75d67",
            language: "pt-br",
            page: 1,
          },
        });
        setMovies(response.data.results.slice(0, 10));
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (error) {
    return (
      <span className="inline-block w-full pt-10 text-center font-medium">
        Desculpe, não foi póssivel carregar os filmes, tente novamente mais
        tarde.😵
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
    <div className="mt-6 px-6">
      {movies.map((item) => (
        <Movie data={item} key={item.id} />
      ))}
    </div>
  );
};
