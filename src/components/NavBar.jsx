import TeamSelect from "./TeamSelect";


export default function NavBar( {selectedOption, teams, setSelectedOption}) {
    return (
        <nav>
            <h1>Puppy Bowl</h1>
            <ul>
                <li><a href="">GitHub</a></li>
                <li><a href="">Canvas</a></li>
                <li><TeamSelect selectedOption={selectedOption} teams={teams} setSelectedOption={setSelectedOption}/></li>
            </ul>
        </nav>
    )
}