


const searchseries_Event = () => {
    function get_movie(movie){
        fetch(`http://www.omdbapi.com/?apikey=75046c65&t=${movie}`).then((response) => {
                  return response.json();
              }).then(data => {
                  document.getElementByClassName("search-poster")[0].source = data["Poster"]
                  document.getElementByClassName("search-title")[0].innerHTML = data["Title"]
                  document.getElementByClassName("search-plot")[0].innerHTML = data["Plot"]
              }).catch((err) => {
                  console.log("rejected", err);
              })  
          }
    const searchseries_Event = document.getElementById("searchseriesEvent")
    searchseries_Event.addEventListener("click", () => {
        const search_input = document.getElementById("search-input");
        get_movie(search_input.value)
    })
}

export default searchseries_Event;