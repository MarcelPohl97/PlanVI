
import Navigation from './components/nav'
import Dashboard from './components/dashboard'
import Searchseries from './components/searchseries'
import Interests from './components/interests'
import Preloader from './components/preloader'
import Footer from './components/footer'
import Modal from './components/modal'
import init_Events from './components/init_Events'




const App = () => {
    const template = document.createElement('template')
    template.innerHTML = `
        ${Navigation()}
        ${Dashboard()}
        ${Searchseries()}
        ${Interests()}
        ${Preloader()}
        ${Modal()}
        ${Footer()}
        ${init_Events()}
    `   
    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;