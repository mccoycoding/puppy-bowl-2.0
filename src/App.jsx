import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import PlayerPage from "./components/PlayerPage";


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/players" element={<PlayerPage />}/>
    </Routes>
  )
}

export default App
