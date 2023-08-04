import { PLAYERS } from "../logic/info";
import { useState, useEffect} from 'react'
import DogCard from "./DogCard";

export default function PlayerGrid() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        try {
            const fetchPlayers = async () => {
                const response = await fetch(PLAYERS);
                const result = await response.json();

                setPlayers(result.data.players)
            }
        } catch (error) {
            
        }
    })


    return (
        <>
            <h2>Players</h2>
            {players.length === 0 ? <h2>No current players, check back later!</h2> : (
                
                players?.map(player => {
                    <DogCard key={player.id} player={player}/>
                })
            )}
        </>
    )
}