import NavBar from "../NavBar";
import PlayerGrid from "../PlayerGrid";
import { PLAYERS } from "../../logic/info";
import { useState, useEffect } from "react";

export default function PlayerPage() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(PLAYERS);
                const result = await response.json();
                setPlayers(result.data.players)
            } catch (error) {
            console.error(error)   
            }
        };
        
        fetchPlayers();
    }, [players])

    return (
        <>
            <NavBar />
            <PlayerGrid players={players}/>
        </>
    )
}