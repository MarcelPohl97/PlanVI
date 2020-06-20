import init_Nav from './initnav'
import '../css/utilities.scss'

const Navigation = () => {
    init_Nav();
    const template = `
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper blue darken-3">
          <div class="container">
            <a href="#!" class="brand-logo">PlanVI</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html">Dashboard</a></li>
              <li><a href="badges.html">Search Series</a></li>
              <li><a href="badges.html">Interests</a></li>
              <li><a href="badges.html">Check Episode</a></li>
              <li><a href="badges.html">Calendar</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
      <li><a href="sass.html">Dashboard</a></li>
      <li><a href="badges.html">Search Series</a></li>
      <li><a href="badges.html">Interests</a></li>
      <li><a href="badges.html">Check Episode</a></li>
      <li><a href="badges.html">Calendar</a></li>
    </ul>
    `;
    return template;
}

export default Navigation;