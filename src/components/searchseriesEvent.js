const get_movie = (movie) => {
    fetch(`http://www.omdbapi.com/?apikey=75046c65&t=${movie}`).then((response) => {
              return response.json();
          }).then(data => {
              document.getElementById("search-poster").src = data["Poster"]
              document.getElementById("search-title").innerHTML = data["Title"]
              document.getElementById("search-plot").innerHTML = data["Plot"]
          }).catch((err) => {
              console.log("rejected", err);
          })  
      }




const searchseries_Event = () => {
    const search_Input = document.getElementById("search");
    const searchseries_Event = document.getElementById("searchseriesEvent")
    searchseries_Event.addEventListener("click", () => {
        get_movie(search_Input.value);
    })
}

export default searchseries_Event;