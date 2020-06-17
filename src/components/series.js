import '../css/utilities.scss';
import init_Modal from './initModal'

const Series = () => {
    init_Modal();
    const template = `
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
    </div>
    `;
    return template;
}

export default Series;