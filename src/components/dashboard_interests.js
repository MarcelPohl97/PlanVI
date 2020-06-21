const dashboard_interests = () => {
    const template = `
    <div class="row grey lighten-3 section">
        <div class="col s12 m12 l7 xl7">
            <div class="card-panel white hoverable">
                <h4 class="black-text">Latest Interests</h4>
                <table class="striped responsive-table">
                    <thead>
                        <tr>
                            <th>Series</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Boruto</td>
                            <td>Action</td>
                            <td>7.9</td>
                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                        </tr>
                        <tr>
                            <td>Arrow</td>
                            <td>Action</td>
                            <td>9.3</td>
                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                        </tr>
                        <tr>
                            <td>The 100</td>
                            <td>Action</td>
                            <td>8.6</td>
                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                        </tr>
                        <tr>
                            <td>The Walking Dead</td>
                            <td>Horror</td>
                            <td>7.7</td>
                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                        </tr>
                        <tr>
                            <td>Supernatural</td>
                            <td>Mystery</td>
                            <td>9.6</td>
                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
    return template;
}

export default dashboard_interests;