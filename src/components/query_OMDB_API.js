const get_movie = (movie, add_data) => {
    fetch(`http://www.omdbapi.com/?apikey=75046c65&t=${movie}`).then((response) => {
              return response.json();
        }).then(data => {
            add_data(data);
        }).catch((error) => {
            alert(error);
        })  
    }

export default get_movie;