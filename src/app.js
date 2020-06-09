
import Navigation from './components/nav'




const App = () => {
    const template = document.createElement('template')
    template.innerHTML = `
    <div class="container">
        ${Navigation()}
    </div>
    `
    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;