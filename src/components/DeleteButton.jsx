import { PLAYERS } from "../logic/info"

export default function DeleteButton( {id} ) {

    const handleClick = async () => {
        try {
            const response = await fetch(`${PLAYERS}/${id}`, {method: 'DELETE'});
            console.log('Player Deleted')
        } catch (error) {
            console.error(error)
        }


    }
 
    return (
        <button onClick={handleClick} className="btn btn-danger">Delete</button>
    )
}