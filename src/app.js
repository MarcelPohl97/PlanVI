
import Navigation from './components/nav'
import Header from './components/header'
import SearchAnime from './components/searchseries'
import SeriesCards from './components/seriescards'




const App = () => {
    const template = document.createElement('template')
    template.innerHTML = `
        ${Navigation()}
        ${Header()}
        ${SearchAnime()}
        ${SeriesCards()}
    `   
    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;