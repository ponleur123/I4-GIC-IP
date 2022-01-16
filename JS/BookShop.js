var books = [
    {name: "Book I1", price: 100, category: "English"},
    {name: "Book I2", price: 100, category: "English"},
    {name: "Book I3", price: 100, category: "English"},
    {name: "Book I4", price: 100, category: "English"},
    {name: "Book I5", price: 100, category: "English"},
    {name: "Book I6", price: 100, category: "English"}
]

function renderList(){
    let grid = document.getElementById('block')
    let boxes = '';
    grid.innerHTML='';
    books.forEach((item,i)=>{
        boxes += `
        <div id="box" >
            <div class="button">
                <button onclick="onDelete(${i})" >Delete</button>
                <button onclick="onUpdate(${i})" >Update</button>
            </div>
            <div class="text">
                <span i>Name: ${item.name}</span> <br />
                <span >Category: ${item.category}</span> <br />
                <span >Price: ${item.price}</span>
            </div>
        </div>   
        `
    })
    grid.innerHTML=boxes;
}
renderList();

function onSubmit(){
    const name = document.getElementById('title').value;
    const price = document.getElementById('money').value;
    const category = document.getElementById('type').value;

    books.push({name,price,category})

    renderList();
    
}
function onUpdate(index){
    const selectedBook = books[index]
    let newBookName = prompt("Please update a new book name",selectedBook.name);
    if(newBookName){
        books[index]['name'] = newBookName;

        renderList();
        alert("Book name is updated");
    }
    if(newBookName==''){
        alert("Book name is required");
    }
}

function onDelete(index){
    books.splice(index, 1);
    renderList();
}