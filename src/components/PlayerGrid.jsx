import DogCard from "./DogCard";

export default function PlayerGrid( {players} ) {
    


    return (
        <div className="container-fluid text-center">
            <h2>Players</h2>
            <div className="row">
                {players.length === 0 ? <h2>No current players, check back later!</h2> : (
                    players?.map(player => (
                        <div key={player.id} className="col-lg-2 col-md-3 col-sm-4 mb-3">
                            <DogCard key={player.id + "card"}  player={player}/>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}