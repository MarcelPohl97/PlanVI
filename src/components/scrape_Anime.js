
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');


const scrape_movie = (url, add_data) => {
    fetch('http://127.0.0.1:8000/api/scrapeanime/', {
        method:'POST', 
        headers:{
            'Content-type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'title':`${url}`})
    }).then((response) => {
        return response.json()
    }).then((data) => {
        add_data(data)
    }).catch((error) => {
        alert("We couldnt find your input requirements try changing one of the following: title season episode")
    })
}

export default scrape_movie;
