
import Navigation from './components/nav'
import Header from './components/header'
import SearchAnime from './components/searchseries'
import Series from './components/series'
import Interests from './components/interest'




const App = () => {
    const template = document.createElement('template')
    template.innerHTML = `
        ${Navigation()}
        ${Header()}
        ${SearchAnime()}
        ${Series()}
        ${Interests()}
    `   
    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;