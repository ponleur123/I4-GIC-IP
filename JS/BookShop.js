
var selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
     insertNewData(formData);
}
function readFormData(){
    var formData = {};
    formData['title'] = document.getElementById('title').value;
    formData['type'] = document.getElementById('type').value;
    formData['money'] = document.getElementById('money').value;
    return formData;
 
}
function insertNewData(data){
    document.getElementById('n').innerHTML = "Name: "+data.title;
    document.getElementById('c').innerHTML = "Category: "+data.type;
    document.getElementById('p').innerHTML = "Price: "+data.money;


}
function resetForm(){
    document.getElementById('title').value = "";
    document.getElementById('type').value = "";
    document.getElementById('money').value = "";
    selectedRow = null;
}

function edit(div){
    selectedRow = div.parentElement.parentElement;
    document.getElementById('title').value = selectedRow.cells[0].innerHTML;
}

function onDelete(div){
    if(confirm('Are you sure to delete this?')){
        row = td.parentElement.parentElement;
        document.getElementById('booklist').deleteRow(row.rowIndex);
        resetForm();
    }
}