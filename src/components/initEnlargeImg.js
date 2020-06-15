
const init_EnlargeImg = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems, {});
    });
}

export default init_EnlargeImg;
