import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;