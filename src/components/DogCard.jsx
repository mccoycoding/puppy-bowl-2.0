import DeleteButton from "./DeleteButton";
import MoreInfoButton from "./MoreInfoButton";
import { capitalize } from "../logic/info";


export default function DogCard( {player} ) {
    const collapseSelector = `${player.id}-${player.name}`;
    return (
        <div className="card">
            <img className="card-img-top" src={player.imageUrl}/>
            <div className="card-body">
                <h5 className="card-title">{player.name}</h5>
                <MoreInfoButton id={player.id} collapseSelector={collapseSelector}/>
                <DeleteButton id={player.id}/>
            </div>
            <div className='collapse' id={`${player.id}-${player.name}`}>
                <div className="card-body">
                    <p className="card-text">Breed: {player.breed}</p>
                    <p className="card-text">Status: {capitalize(player.status)}</p>
                    <p className="card-text">Team: {player.team ? player.team : "No team"}</p>
                </div>
            </div>
        </div>
        
    )
}