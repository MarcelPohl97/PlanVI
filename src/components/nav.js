import init_Nav from './initnav'
import '../css/utilities.scss'

const Navigation = () => {
    init_Nav();
    const template = `
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper blue darken-3">
          <div class="container">
            <a href="#!" class="brand-logo" id="brand-logo">PlanVI</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down header-nav">
              <li><a data-id="dashboard">Dashboard</a></li>
              <li><a data-id="searchseries">Search Series</a></li>
              <li><a data-id="interests">Interests</a></li>
              <li><a data-id="checkepisode">Check Episode</a></li>
              <li><a data-id="calendar">Calendar</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <ul class="sidenav header-nav" id="mobile-demo">
      <li><a data-id="dashboard">Dashboard</a></li>
      <li><a data-id="searchseries">Search Series</a></li>
      <li><a data-id="interests">Interests</a></li>
      <li><a data-id="checkepisode">Check Episode</a></li>
      <li><a data-id="calendar">Calendar</a></li>
    </ul>
    `;
    return template;
}

export default Navigation;