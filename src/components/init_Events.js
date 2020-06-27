import nav_Events from './nav_Events'
import modal_Events from './modal_Events';



const init_Events = () => {
    document.addEventListener("DOMContentLoaded", () => {
        nav_Events();
        modal_Events();
    })
}

export default init_Events;