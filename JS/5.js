const url = 'https://jsonplaceholder.typicode.com/users'

async function getAPI(url){
    // document.getElementById("loading").style.display="inline"
    let response = await fetch(url);

    if(response){

        let data = await response.json();
        console.log(data)
        document.getElementById("loading").style.display="none";
        document.getElementById("box").style.display="inline"

     renderList(data);
    }
    else{
        document.getElementById('error_screen').style.display='inline'
    }

    
}
getAPI(url);
function renderList(data){
    const mytable = document.getElementById("table");
    data.forEach(d => {
        let newRow = document.createElement("tr");
        Object.values(d).forEach((value) => {
            let cell = document.createElement("td");
            cell.innerText = value;
            newRow.appendChild(cell);
        })
        mytable.appendChild(newRow);
    });
    

}