import '../../node_modules/materialize-css/sass/materialize.scss'
import './alert.js'

const Header = () => {
    const template = `
    <header>
        <h1>My Parcel App</h1>
        <p>This is a Test for Anime App</p>
        <a class="waves-effect waves-light btn">button</a>
    </header>
    `;

    return template;
}

export default Header;