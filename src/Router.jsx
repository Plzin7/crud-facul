import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/index.jsx"
import { Login } from "./pages/Login/index.jsx"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}