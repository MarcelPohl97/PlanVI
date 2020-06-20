const dashboard_header = () => {
    const template = `
    <div class="row grey lighten-3 section">
        <div class="col s12 m6 l3 xl3">
            <div class="card-panel  blue darken center-align hoverable">
                <i class="medium material-icons white-text">insert_chart</i>
                <h4 class="white-text">Viewed Episodes</h4>
                <h1 class="white-text">213</h1>
                <div class="progress grey lighten-1">
                    <div class="determinate white" style="width: 70%"></div>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l3 xl3">
            <div class="card-panel white center-align hoverable">
                <i class="medium material-icons black-text">insert_chart</i>
                <h4 class="black-text">Calendar Entries</h4>
                <h1 class="black-text">22</h1>
                <div class="progress grey lighten-1">
                    <div class="determinate blue darken" style="width: 53%"></div>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l3 xl3">
            <div class="card-panel blue darken center-align hoverable">
                <i class="medium material-icons white-text">insert_chart</i>
                <h4 class="white-text">Checking Episodes</h4>
                <h1 class="white-text">6</h1>
                <div class="progress grey lighten-1">
                    <div class="determinate white" style="width: 37%"></div>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l3 xl3">
            <div class="card-panel white center-align hoverable">
                <i class="medium material-icons black-text">insert_chart</i>
                <h4 class="black-text">Finished Series</h4>
                <h1 class="black-text">70</h1>
                <div class="progress grey lighten-1">
                    <div class="determinate blue darken" style="width: 23%"></div>
                </div>
            </div>
        </div>
    </div>
    `
    return template;
}

export default dashboard_header;