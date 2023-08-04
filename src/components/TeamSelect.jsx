export default function TeamSelect( {selectedOption, teams, setSelectedOption} ) {


    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue)
    }
    
    return (
        <div className="form-floating">
            
            <select className="form-select form-select-lg mb-3 pb-2" id="teams" value={selectedOption} onChange={handleSelectChange}>
                <option value="0">Choose Team</option>
                {teams?.map((team) => (
                    <option value={team.id} key={team.id}>{team.name}</option>
                ))}
            </select>
            <label htmlFor="teams">Select Team: </label>
        </div>
    )
}