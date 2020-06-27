const add_modal_action_functionality = (btn_modal_action, btn_action, btn_action_event) => {
    btn_modal_action.classList.remove(...btn_action);
    btn_modal_action.classList.add(btn_action_event);
}

const change_modal_action_instruction = (modal_title, modal_action_name) => {
    document.getElementById("modal-title").textContent = modal_title
    document.getElementById("model-action-btn").textContent = modal_action_name
}

const modal_action_loader = () => {
    const modal_action_loader_recognizer = document.getElementById("app");
    const modal_action_btn = document.getElementById("model-action-btn")

    const action_btn = ["searchseries-action-event", "interest-action-event"];

    modal_action_loader_recognizer.addEventListener("click", event => {
        const condition = event.target.classList
        switch(true) {
            case condition.contains('searchseries-action-btn'):
                add_modal_action_functionality(modal_action_btn, action_btn, "searchseries-action-event")
                change_modal_action_instruction("Search Series", "Search")
                break;
            case condition.contains('interest-action-btn'):
                add_modal_action_functionality(modal_action_btn, action_btn, "interest-action-event");
                change_modal_action_instruction("Add to Interest", "Add")
                break;
        }
    })
}


export default modal_action_loader;