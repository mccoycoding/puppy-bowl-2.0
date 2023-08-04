export default function TeamSelect( {selectedOption, teams, setSelectedOption} ) {


    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue)
        
    }
    
    return (
        <div>
            <label htmlFor="teams">Select Team: </label>
            <select id="teams" value={selectedOption} onChange={handleSelectChange}>
                <option value="0">Choose Team</option>
                {teams?.map((team) => (
                    <option value={team.id} key={team.id}>{team.name}</option>
                ))}
            </select>
        </div>
    )
}