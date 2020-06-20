
import Navigation from './components/nav'
import Dashboard from './components/dashboard'




const App = () => {
    const template = document.createElement('template')
    template.innerHTML = `
        ${Navigation()}
        ${Dashboard()}
    `   
    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;