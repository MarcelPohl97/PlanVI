import init_Nav from './initNav';
import '../css/welcomeHeader.scss';


const load_Image = (src) => {
    const template = `
    <img src=${headerbg}/>
    `
    return template
}

const Navigation = () => {
    init_Nav();
    const template = `
    <div class="navbar-fixed">
        <nav class="indigo darken-4">
        <div class="container">
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">PlanVI</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li>
                    <a href="#home">Calendar</a>
                    </li>
                    <li>
                    <a href="#search">Interests</a>
                    </li>
                    <li>
                    <a href="#popular">Search</a>
                    </li>
                    <li>
                    <a href="#gallery">Ratings</a>
                    </li>
                    <li>
                    <a href="#contact">Episode Checker</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
        <li><a href="#home">Home</a></li>
        <li><a href="#search">Search</a></li>
        <li><a href="#popular">Popular Places</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="section welcome__header" id="index-banner">
      <div class="container">
        <br><br>
        <h1 class="header center orange-text">Starter Template</h1>
        <div class="row center">
          <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
        </div>
        <div class="row center">
          <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
        </div>
        <br><br>
      </div>
    </div>
    `;
    return template;
}

export default Navigation;