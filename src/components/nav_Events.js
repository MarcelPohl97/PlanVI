
const nav_Events = () => {

    //Variables for all Sections
    const dashboard = document.getElementsByClassName("dashboard")[0];
    const searchseries = document.getElementsByClassName("searchseries")[0];
    const interests = document.getElementsByClassName("interests")[0];
    const preloader = document.getElementsByClassName("preloader")[0];
    
    //add Hide class function to add hide on all Sections
    const add_Hide = () => {
        [dashboard, searchseries, interests, preloader].forEach(item => {
            item.classList.add("hide");
        })
    }

    //Parent Element from Navigation Items
    const header_nav = document.querySelectorAll(".header-nav");

    //Go through each Nav Items and
    header_nav.forEach(item => {
        //Add click event to
        item.addEventListener("click", event => {
            //Hide all Sections
            add_Hide();
            //Show preloader
            preloader.classList.remove("hide");
            //Set Timeout Function to load and remove it after 1.5 seconds aswell as showing the clicked section
            setTimeout(function(){
                preloader.classList.add("hide");
                document.getElementsByClassName(event.target.getAttribute('data-id'))[0].classList.remove("hide"); 
            }, 1500);
        })
    })
};

export default nav_Events;
