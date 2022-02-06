const url = 'https://jsonplaceholder.typicode.com/photos'


async function getAPI(url){
    
    let response = await fetch(url);
     
    let data = await response.json()
    console.log(data)
   renderList(data)
}

getAPI(url);


function renderList(data){
    let grid = document.getElementById('block')
    let boxes = '';
    grid.innerHTML='';
    
    data.forEach((r,i)=>{
        boxes += `
        <div id="box" >
            <div class="button">
                <button onclick="onDelete(${i})" >Delete</button>
                <button onclick="onUpdate(${i})" >Update</button>
            </div>
            <div class="text">
                <span i>Name: ${r.albumId}</span> <br />
                <span >Category: ${r.id}</span> <br />
                <span >Price: ${r.title}</span>
            </div>
        </div>   
        `
    })
    grid.innerHTML=boxes;
}




