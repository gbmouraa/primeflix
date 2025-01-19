import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
