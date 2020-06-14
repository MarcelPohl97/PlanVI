import '../css/utilities.scss';
import '../css/searchanime.scss';

const SearchSeries = () => {
    const template = `
    <div class="section indigo darken-4" id="index-banner">
      <div class="container center padding-all-mini">
        <div class="row">
            <div class="col s12">
                <h3 class="header white-text">Search Series</h3>
                <div class="input-field">
                    <input class="white grey-text searchanime__input autocomplete" placeholder="Search your favourite Series" type="text" id="autocomplete-input">
                </div>
            </div>
        </div>
      </div>
    </div>
    `;
    return template;
}

export default SearchSeries;