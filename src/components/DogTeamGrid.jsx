import { useState, useEffect } from "react";
import DogCard from "./DogCard";

export default function DogTeamGrid({ selectedOption, teams }) {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    if (selectedOption !== "0") {
      const selectedTeam = teams.find(obj => obj.id === Number(selectedOption));
      setTeam(selectedTeam);
    }
  }, [selectedOption, teams]);
  //console.log(team?.players)

  return (
    <>
      {selectedOption === "0" ? (
        <h2>Select a Team!</h2>
      ) : team ? (
        <div>
          <h1>Team: {team.name}</h1>
          <h2>Players</h2>
          <div>
            {team.players.length === 0 ? <h2>No current players, check back later!</h2> : (
              team.players?.map((player) => (
                <DogCard key={player.id} player={player} />
            ))
            )}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
