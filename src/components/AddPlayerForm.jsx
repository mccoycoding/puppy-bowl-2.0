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
                body: JSON.stringify({ name, breed, status, team })
            })
            const result = await response.json();
            console.log('Success!')
            navigate('/players')
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="">Breed</label>
            <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)}/>
            <label htmlFor="">Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="bench">Bench</option>
                <option value="field">Field</option>
            </select>
            <button type="submit">Submit</button>
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