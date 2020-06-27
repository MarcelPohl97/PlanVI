import get_movie from './query_OMDB_API'

const load_Searchseries = (data) => {
    document.getElementById("search-poster").src = data["Poster"]
    document.getElementById("search-title").textContent = data["Title"]
    document.getElementById("search-plot").textContent = data["Plot"]
    document.getElementById("search-produced").textContent = data["Country"]
    document.getElementById("search-genre").textContent = data["Genre"]
    document.getElementById("search-year").textContent = data["Year"]
}


const searchseries_Event = () => {
    const search_Input = document.getElementById("search");
    get_movie(search_Input.value, load_Searchseries);
}

export default searchseries_Event;