import searchseries_Event from './searchseriesEvent';
import modal_action_loader from './modal_action_button_loader'
import add_Interest from './interest_Event'

const modal_Events = () => {
    modal_action_loader();
    const modal = document.getElementById("modal1");
    modal.addEventListener("click", event => {
        const condition = event.target.classList
        switch(true) {
            case condition.contains('searchseries-action-event'):
                searchseries_Event();
                break;
            case condition.contains("interest-action-event"):
                add_Interest();
                break;
        }
    })
}

export default modal_Events;