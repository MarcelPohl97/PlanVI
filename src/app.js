
import Header from './components/nav'
import Footer from './components/footer'

/*const App = async () => {
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="container">
        ${Header()}
        ${Content()}
        ${Footer()}
    </div>
    `

    return template;
}

export default App;*/

const App = () => {
    const template = document.createElement('template')
    template.innerHTML = `
    <div class="container">
        ${Header()}
        ${Footer()}
    </div>
    `
    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;