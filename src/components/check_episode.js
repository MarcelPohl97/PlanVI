import init_Tabs from './inittabs'

const checkEpisode = () => {
    init_Tabs();
    const template = `
    <div class="checkepisode container hide">
        <div class="card-panel white hoverable">
            <div class="section"></div>
            <div class="divider"></div>
            <div class="section"></div>
            <div class="row valign-wrapper">
                <div class="col s3 m2 l2 xl1">
                    <a class="btn blue darken checkepisode-action-btn right modal-trigger" href="#modal1">Check Episode</a>
                </div>
            </div>
        </div>
        <div class="card-panel white hoverable">
            <h4 class="black-text">Episodes getting Checked</h4>
            <div class="interest-panel">
                <div id="interesting-data-1" class="col s12 white">
                    <div class="row section">
                        <div class="col s12 m12 l12 xl12">
                                <table class="striped responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Series</th>
                                            <th>Season</th>
                                            <th>Episode</th>
                                            <th>Genre</th>
                                            <th>Rating</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody class="interesting-data-tbody-1">
                                        <tr>
                                            <td>Boruto</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>Action</td>
                                            <td>7.9</td>
                                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                                        </tr>
                                        <tr>
                                            <td>Arrow</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>Action</td>
                                            <td>9.3</td>
                                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                                        </tr>
                                        <tr>
                                            <td>The 100</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>Action</td>
                                            <td>8.6</td>
                                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                                        </tr>
                                        <tr>
                                            <td>The Walking Dead</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>Horror</td>
                                            <td>7.7</td>
                                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                                        </tr>
                                        <tr>
                                            <td>The Walking Dead</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>Horror</td>
                                            <td>7.7</td>
                                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
                <ul id="tabs-swipe-demo" class="tabs">
                    <li class="tab col s1 m1 l3 xl3"><a class="blue-text" href="#interesting-data-1">1</a></li>
                    <li class="tab col s1 m1 l3 xl3"><a class="blue-text" href="#interesting-data-2">2</a></li>
                    <li class="tab col s1 m1 l3 xl3"><a class="blue-text" href="#interesting-data-3">3</a></li>
                </ul>
            </div>
        </div>
        <div class="card-panel white hoverable">
            <h4 class="black-text">Latest Episode Checks</h4>
            <div class="interest-panel">
                <div id="interesting-data-1" class="col s12 white">
                    <div class="row section">
                        <div class="col s12 m12 l12 xl12">
                                <table class="striped responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Series</th>
                                            <th>Season</th>
                                            <th>Episode</th>
                                            <th>Genre</th>
                                            <th>Rating</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody class="interesting-data-tbody-1">
                                        <tr>
                                            <td>Boruto</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>Action</td>
                                            <td>7.9</td>
                                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                                        </tr>
                                        <tr>
                                            <td>Arrow</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>Action</td>
                                            <td>9.3</td>
                                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                                        </tr>
                                        <tr>
                                            <td>The 100</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>Action</td>
                                            <td>8.6</td>
                                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                                        </tr>
                                        <tr>
                                            <td>The Walking Dead</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>Horror</td>
                                            <td>7.7</td>
                                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                                        </tr>
                                        <tr>
                                            <td>The Walking Dead</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>Horror</td>
                                            <td>7.7</td>
                                            <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
                <ul id="tabs-swipe-demo" class="tabs">
                    <li class="tab col s1 m1 l3 xl3"><a class="blue-text" href="#interesting-data-1">1</a></li>
                    <li class="tab col s1 m1 l3 xl3"><a class="blue-text" href="#interesting-data-2">2</a></li>
                    <li class="tab col s1 m1 l3 xl3"><a class="blue-text" href="#interesting-data-3">3</a></li>
                </ul>
            </div>
        </div>

    </div>
    `

    return template;
}

export default checkEpisode;