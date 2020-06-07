import check_Anime from './checkAnime'

document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn')){
        check_Anime();
    }
})