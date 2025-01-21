import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex h-20 items-center justify-center bg-black">
      <div className="flex w-[80%] max-w-[760px] justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          PrimeFlix
        </Link>
        <Link
          to="/favorite"
          className="inline-block rounded bg-blue-500 p-2 text-sm text-white transition-all hover:opacity-85"
        >
          Meus filmes
        </Link>
      </div>
    </header>
  );
};
