const dashboard_calendar = () => {
    const template = `
    <div class="row blue lighten-4 section">
        <div class="col s12 m8 l7 xl7">
            <div class="card-panel white hoverable">
                <h4 class="black-text">Latest Calendar Entries</h4>
                <table class="striped">
                    <thead>
                        <tr>
                            <th>Series</th>
                            <th>Season</th>
                            <th>Episode</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                
                    <tbody>
                        <tr>
                            <td>Boruto</td>
                            <td>10</td>
                            <td>165</td>
                            <td>20.06.2020</td>
                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                        </tr>
                        <tr>
                            <td>Arrow</td>
                            <td>2</td>
                            <td>10</td>
                            <td>22.06.2020</td>
                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                        </tr>
                        <tr>
                            <td>The 100</td>
                            <td>7</td>
                            <td>5</td>
                            <td>23.06.2020</td>
                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                        </tr>
                        <tr>
                            <td>The 100</td>
                            <td>7</td>
                            <td>5</td>
                            <td>23.06.2020</td>
                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                        </tr>
                        <tr>
                            <td>The 100</td>
                            <td>7</td>
                            <td>5</td>
                            <td>23.06.2020</td>
                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
    return template;
}

export default dashboard_calendar;

