import '../css/welcomeHeader.scss';
import '../css/utilities.scss';

const Header = () => {
    const template = `
    <div class="section welcome__header padding-all-medium" id="index-banner">
      <div class="container center padding-all-medium">
        <h2 class="header white-text">Welcome <span> Marcel </span></h2>
        <h5 class="header white-text">You currently have <span> 0 </span> new unwatched Episodes </h5>
        <a href="#" id="download-button" class="btn btn-large waves-effect waves-light indigo darken-4 margin-top-small">Check Episodes</a>
      </div>
    </div>
    `;
    return template;
}

export default Header;