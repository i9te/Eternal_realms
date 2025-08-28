import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CharacterSelect from "./pages/CharacterSelect";
import Game from "./pages/Game";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/characters" element={<CharacterSelect />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}
