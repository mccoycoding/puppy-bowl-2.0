import AddPlayerForm from "../AddPlayerForm";
import NavBar from "../NavBar";
import { useState, useEffect } from "react";
import { TEAMS } from "../../logic/info";


export default function NewPlayerPage() {
    const [teams, setTeams] = useState([]);


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

    

    return(
        <>
            <NavBar />
            <AddPlayerForm teams={teams}/>
        </>
    )
}