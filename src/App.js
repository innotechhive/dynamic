import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";

//route
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>


    </div>
  );
}

export default App;
