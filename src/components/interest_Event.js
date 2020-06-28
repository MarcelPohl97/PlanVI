const add_Interest = () => {
    for(let i = 1; i < 6; i++){
        if(document.getElementById(`interesting-data-${i}`)){
            let interest_data_count = document.getElementsByClassName(`interesting-data-tbody-${i}`)[0]
            if(interest_data_count.childElementCount < 5){
                console.log(`We added your interest to the ${i} Table`);
                const table_row = document.createElement("tr");
                table_row.innerHTML += `
                    <td>The Testing the Data</td>
                    <td>3</td>
                    <td>5</td>
                    <td>Action</td>
                    <td>7.5</td>
                    <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                `
                interest_data_count.appendChild(table_row)
                break;
            }else {
                console.log(`The ${i} Table is full`)
                continue
            }
        } else {
            const tab = document.getElementsByClassName("tabs")[0];
            const tab_btn = document.createElement("li")
            tab_btn.classList += "tab col s1 m1 l3 xl3"
            tab_btn.innerHTML += `
                <a class="blue-text" href="#interesting-data-${i}">${i}</a>
            `
            tab.appendChild(tab_btn);
            const interest_panel = document.getElementsByClassName("interest-panel")[0];
            const data_table = document.createElement("div");
            data_table.style.display = "none";
            data_table.id = `interesting-data-${i}`
            data_table.classList += `col s12 white`
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
                                <td>The Testing the Data</td>
                                <td>3</td>
                                <td>5</td>
                                <td>Action</td>
                                <td>7.5</td>
                                <td class="btn blue darken valign-wrapper margin-top-mini">Watch Online</td>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
            interest_panel.appendChild(data_table);
            break;
        }
    }
}

export default add_Interest;

/*
add_Interest:
->check_table_exists()
    -> yes? -> check_table_has_more_than_5() -> yes? -> continue
                                             -> no? -> add data to table
    -> no? -> create_table() -> create_button_for_table -> add data to table

*/

