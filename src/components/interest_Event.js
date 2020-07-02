import scrape_Anime from './scrape_Anime'



const add_table_row = (table, data) => {
    const table_row = document.createElement("tr");
    table_row.innerHTML += `
        <td>${data.title}</td>
        <td>${data.season}</td>
        <td>${data.episode}</td>
        <td>${data.genre}</td>
        <td>${data.rating}</td>
        <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
    `
    table.appendChild(table_row)
}

const add_tab_btn = (i) => {
    const tab = document.getElementsByClassName("tabs")[0];
    const tab_btn = document.createElement("li")
    tab_btn.classList += "tab col s1 m1 l3 xl3"
    tab_btn.innerHTML += `
        <a class="blue-text" href="#interesting-data-${i}">${i}</a>
    `
    tab.appendChild(tab_btn);
}

const add_table = (i, data) => {
    const interest_panel = document.getElementsByClassName("interest-panel")[0];
    const data_table = document.createElement("div");
    data_table.style.display = "none";
    data_table.id = `interesting-data-${i}`
    data_table.classList = `col s12 white`
    data_table.innerHTML += `
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
                    <tbody class="interesting-data-tbody-${i}">
                        <td>${data.title}</td>
                        <td>${data.season}</td>
                        <td>${data.episode}</td>
                        <td>${data.genre}</td>
                        <td>${data.rating}</td>
                        <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                    </tbody>
                </table>
            </div>
        </div>
    `
    interest_panel.appendChild(data_table);
}

const add_Interest = () => {
    scrape_Anime(document.getElementById("search").value, check_Interest)
}

const check_Interest = (data) => {
    for(let i = 1; i < 6; i++){
        if(document.getElementById(`interesting-data-${i}`)){
            let interest_data_count = document.getElementsByClassName(`interesting-data-tbody-${i}`)[0]
            if(interest_data_count.childElementCount < 5){
                add_table_row(interest_data_count, data);
                break;
            }else {
                continue
            }
        } else {
            add_tab_btn(i);
            add_table(i, data);
            break;
        }
    }
}

export default add_Interest;


