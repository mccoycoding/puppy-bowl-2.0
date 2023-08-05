import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { PLAYERS } from "../logic/info"
 
export default function AddPlayerForm( {teams} ) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [status, setStatus] = useState('bench');
    //const [team, setTeam] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(PLAYERS, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, breed, status })
            })
            const result = await response.json();
            console.log('Success!')
            navigate('/players')
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <form className="text-center" onSubmit={handleSubmit} action="">
            <div className="form-floating mb-3 pb-3">
                <input className="form-control" id="floating-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Rex"/>
                <label htmlFor="floating-name">Name: </label>
            </div>
            <div className="form-floating mb-3 pb-3">
                <input className="form-control" id="floatings-breed" type="text" value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="Mixed Breed"/>
                <label htmlFor="floating-breed">Breed: </label>
            </div>
            <div className="form-floating mb-3 pb-3">
                <select className="form-select" id="floating-status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="bench">Bench</option>
                    <option value="field">Field</option>
                </select>
                <label htmlFor="floating-status">Status: </label>
            </div>
            <button className="btn btn-success" type="submit">Submit</button>
        </form>
    )
}

{/* <label htmlFor="">Team</label>
<select value={team} onChange={(e) => setTeam(Number(e.target.value))}>
    <option value={null}></option>
    {teams?.map((team) => (
        <option value={team.id} key={team.id}>{team.name}</option>
    ))}
</select> */}