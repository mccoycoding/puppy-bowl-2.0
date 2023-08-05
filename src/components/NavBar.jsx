import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PLAYERS, capitalize} from "../logic/info";


export default function NavBar( {selectedOption, teams, setSelectedOption}) {
    const [search, setSearch] = useState('');
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(PLAYERS)
                const result = await response.json();
                setPlayers(result.data.players)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPlayers();
    }, [players])


    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const nameList = players?.map(player => player.name)


    const filteredItems = nameList?.filter(item => item.toLowerCase().startsWith(search.toLowerCase));

    

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img height={50} width={50} src="https://wbd.com/wp-content/uploads/2023/01/PB_XIX_2d_logo_vector_1_color.jpg" alt="Puppy Bowl" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/mccoycoding/puppy-bowl-2.0">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://fullstack.instructure.com/courses/639/assignments/25925?module_item_id=207083">Canvas</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Teams</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/players">Players</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/new-player">New Player</Link>
                        </li>
                    </ul>
                    <form onSubmit={handleSubmit} className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            placeholder="Search"
                            type="search"
                            value={search}
                            onChange={handleSearchChange} />
                        <button type="submit" className="btn btn-outline-primary">Search</button>
                    </form>
                    
                </div>
            </div>
        </nav>
    )
}