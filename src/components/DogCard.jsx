import DeleteButton from "./DeleteButton";
import MoreInfoButton from "./MoreInfoButton";
import { capitalize } from "../logic/info";


export default function DogCard( {player} ) {

    return (
        <div className="card">
            <img className="card-img-top" src={player.imageUrl}/>
            <div>
                <h5>{player.name}</h5>
                <p>{player.breed}</p>
                <p>{capitalize(player.status)}</p>
                <MoreInfoButton id={player.id}/>
                <DeleteButton id={player.id}/>
            </div>
        </div>
        
    )
}