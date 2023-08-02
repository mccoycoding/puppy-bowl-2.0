import { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import DogGrid from "./components/DogGrid";
import { TEAMS } from "./logic/info";


function App() {
  
  //Define State Variables
  const [teams, setTeams] = useState([]);
  const [selectedOption, setSelectedOption] = useState("0")
    
  //Hook into useEffect and load our Teams Array
  useEffect(() => {
      const fetchTeams = async () => {
          try {
              const response = await fetch(TEAMS);
              const result = await response.json();
              
              setTeams(result.data.teams);
          } catch (error) {
              console.error(`Error fetching team data: ${error}`)
          }
          
      };
      fetchTeams();
  }, []);
  return (
    <>
      <NavBar selectedOption={selectedOption} teams={teams} setSelectedOption={setSelectedOption}/>
      <DogGrid selectedOption={selectedOption} teams={teams}/>
    </>
  )
}

export default App
