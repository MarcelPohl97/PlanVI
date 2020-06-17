import '../css/utilities.scss';
import '../css/searchanime.scss';
import '../css/seriesselect.scss';
import initSelect from './initSelect';

const SearchSeries = () => {
  initSelect();
    const template = `
    <div class="section indigo darken-4" id="index-banner">
      <div class="container center padding-all-mini">
      <h3 class="header white-text">Search Series</h3>
        <div class="row">
            <div class="col s12">
                <div class="input-field">
                    <input class="white grey-text searchanime__input autocomplete" placeholder="Search your favourite Series" type="text" id="autocomplete-input">
                </div>
            </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <select class="test">
              <option value="" disabled selected>Choose your option</option>
              <option value="1">Search Serie</option>
              <option value="2">Add to Interest</option>
              <option value="3">Add to Calendar</option>
              <option value="3">Get Rating</option>
              <option value="3">Check Episode</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <a href="#modal1" class="btn btn-large grey darken-4 white-text text-white modal-trigger left">Submit<i class="material-icons right">send</i></a>
          </div>
        </div>
      </div>
    </div>
    `;
    return template;
}

export default SearchSeries;