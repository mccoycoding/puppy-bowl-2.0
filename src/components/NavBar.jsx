import TeamSelect from "./TeamSelect";
import { Link } from "react-router-dom";


export default function NavBar( {selectedOption, teams, setSelectedOption}) {
    return (
        <nav>
            <h1>Puppy Bowl</h1>
            <ul>
                <li><a href="">GitHub</a></li>
                <li><a href="">Canvas</a></li>
                <li><Link to="/players">View All Players</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}