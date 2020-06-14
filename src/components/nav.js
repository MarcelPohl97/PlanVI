import init_Nav from './initNav';

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
                    <a href="#home">Search</a>
                  </li>
                  <li>
                    <a href="#search">Interests</a>
                  </li>
                  <li>
                    <a href="#popular">Calendar</a>
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
    `;
    return template;
}

export default Navigation;