const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C"
const PLAYERS = `${API_URL}/players`
const TEAMS = `${API_URL}/teams`

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export { PLAYERS, TEAMS, capitalize }