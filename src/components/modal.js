import init_Modal from './initmodal'

const Modal = () => {
    init_Modal();
    const template = `
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4 class="blue-text text-darken" id="modal-title">Search Series</h4>
            <div class="row valign-wrapper">
                <div class="input-field col s9 m10 l10 xl11">
                    <input type="text" class="validate" id="search" placeholder="">
                    <label for="last_name">Input Series</label>
                </div>
                <div class="col s3 m2 l2 xl1">
                    <a href="#!" class="modal-close modal-action-btn btn blue darken" id="model-action-btn">Search</a>
                </div>
            </div>
        </div>
    </div>
    `
    return template;
}

export default Modal;