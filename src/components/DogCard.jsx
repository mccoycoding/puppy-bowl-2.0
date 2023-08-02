import DeleteButton from "./DeleteButton";


export default function DogCard( {player} ) {

    return (
        <div>
            <img src={player.imageUrl}/>
            <h1>{player.name}</h1>
            <h2>{player.breed}</h2>
            <h3>{player.status.charAt(0).toUpperCase() + player.status.slice(1)}</h3>
            <DeleteButton />
        </div>
        
    )
}