var books = [
    {name: "Book I1", price: 100, category: "English"},
    {name: "Book I2", price: 100, category: "English"},
    {name: "Book I3", price: 100, category: "English"},
    {name: "Book I4", price: 100, category: "English"},
    {name: "Book I5", price: 100, category: "English"},
    {name: "Book I6", price: 100, category: "English"}
]
localStorage.books = JSON.stringify(books)
const storedBook = JSON.parse(localStorage.books)

function renderList(){
    let grid = document.getElementById('block')
    let boxes = '';
    grid.innerHTML='';
    storedBook.forEach((books,i) =>{
        boxes += `
        <div id="box" >
            <div class="button">
                <button onclick="onDelete(${i})" >Delete</button>
                <button onclick="onUpdate(${i})" >Update</button>
            </div>
            <div class="text">
                <span i>Name: ${books['name']}</span> <br />
                <span >Category: ${books['category']}</span> <br />
                <span >Price: ${books['price']}</span>
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

    // books.push({name,price,category})
    storedBook.push({name,price,category})
    localStorage.books = JSON.stringify(storedBook)

    renderList();
    
}
function onUpdate(index){
    const selectedBook = storedBook[index]
    let newBookName = prompt("Please update a new book name",selectedBook.name);
    if(newBookName){
        storedBook[index]['name'] = newBookName;
        
        renderList();
        alert("Book name is updated");
    }
    if(newBookName==''){
        alert("Book name is required");
    }
}

function onDelete(index){
    storedBook.splice(index, 1);
    renderList();
}