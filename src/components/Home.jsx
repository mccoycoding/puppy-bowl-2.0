import NavBar from "./NavBar"
import DogTeamGrid from "./DogTeamGrid"
import TeamSelect from "./TeamSelect"
import { useState, useEffect } from "react"
import { TEAMS } from '../logic/info'

export default function Home() {

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
            <NavBar />
            <TeamSelect selectedOption={selectedOption} teams={teams} setSelectedOption={setSelectedOption}/>
            <DogTeamGrid selectedOption={selectedOption} teams={teams}/>
        </>
        
    )
}