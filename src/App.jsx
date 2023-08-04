import TeamPage from "./components/pages/TeamPage";
import { Routes, Route } from "react-router-dom";
import PlayerPage from "./components/pages/PlayerPage";
import NewPlayerPage from "./components/pages/NewPlayerPage";


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<TeamPage />}/>
      <Route path="/players" element={<PlayerPage />}/>
      <Route path="/new-player" element={<NewPlayerPage />}/>
    </Routes>
  )
}

export default App
