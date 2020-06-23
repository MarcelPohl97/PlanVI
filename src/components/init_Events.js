import nav_Events from './nav_Events'
import searchseries_Event from './searchseriesEvent';

const init_Events = () => {
    document.addEventListener("DOMContentLoaded", () => {
        nav_Events();
        searchseries_Event();
    })
}

export default init_Events;