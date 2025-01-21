import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { MovieDetails } from "./pages/movie-details";
import { Favorite } from "./pages/favorite";
import { ToastContainer } from "react-toastify";

export const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};
