import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";

export const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
