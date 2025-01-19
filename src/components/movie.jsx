import { Link } from "react-router-dom";

export const Movie = ({ data }) => {
  return (
    <div className="mb-7 flex flex-col items-center text-center">
      <span className="text-2xl font-bold">{data.title}</span>
      <div className="mt-4 max-w-[700px] overflow-hidden rounded">
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.tile}
        />
        <Link
          className="inline-block w-full bg-blue-500 py-2 text-lg font-medium text-white"
          to={`/movie-details`}
        >
          Acessar
        </Link>
      </div>
    </div>
  );
};
