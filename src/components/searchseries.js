const Searchseries = () => {
    const template = `
    <div class="searchseries container hide">
        <div class="card-panel white hoverable">
            <div class="row valign-wrapper">
                <div class="col s12 m4 l4 xl2">
                    <img src="https://serienstream.sx/public/img/cover/arrow-stream-cover-6gIKfH6QatAfQVpN2d0sUlsPZxCA8Hnz_220x330.jpg" alt="" id="search-poster" class="responsive-img">
                </div>
                <div class="col s12 m8 l8 xl10">
                    <h5 class="black-text"> <span id="search-title">Arrow</span></h5>
                    <p class="black-text"> <span id="search-plot">Die Serie „Arrow“ handelt vom früheren Playboy und Erbe eines großen Vermögens Oliver Queen (Stephen Amell). Nachdem er fünf Jahre auf sich alleine gestellt auf einer einsamen Insel überleben musste, kehrt er mit ungewöhnlichen neuen Fertigkeiten und einem geheimnisvollen Plan zurück in seine Heimatstadt Starling City und erklärt als Green Arrow dem Verbrechen den Kampf. In den Comics ist Green Arrow der klassischen Figur Robin Hood nachempfunden. In Maske und mit Pfeil und Bogen nimmt er die Gerechtigkeit als Superheld in die eigenen Hände, verwendet aber auch allerhand Trickpfeile. Obwohl sein Alter Ego Oliver Queen selbst Multimilliardär ist, hat er eine Vorliebe dafür, korrupten Firmen das Handwerk zu legen.</span></p>
                    <p class="black-text">Produced: <span id="search-produced">Action, Adventure, Crime, Drama, Mystery, Sci-Fi</span></p>
                    <p class="black-text">Genre: <span id="search-genre">Action, Adventure, Crime, Drama, Mystery, Sci-Fi</span></p>
                    <p class="black-text">Year: <span id="search-year">2012-2020</span></p>
                    <a class="btn blue darken">Watch Online</a>
                    <div class="section"></div>
                </div>
            </div>
            <div class="section"></div>
            <div class="divider"></div>
            <div class="section"></div>
            <div class="row valign-wrapper">
                <div class="col s3 m2 l2 xl1">
                    <a class="btn blue darken searchseries-action-btn right modal-trigger" href="#modal1">Search</a>
                </div>
            </div>
        </div>
    </div>
    `
    return template;
}

export default Searchseries;
