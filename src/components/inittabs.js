const init_Tabs = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.tabs');
        const options = {"swipable": true,
        "responsiveThreshold": 500,
    }
        var instances = M.Tabs.init(elems, options);
    });
}

export default init_Tabs;