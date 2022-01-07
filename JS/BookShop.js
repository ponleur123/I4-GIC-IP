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
    var table = document.getElementById('booklist').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;

    cell2 = newRow.insertCell(1);
    cell1.innerHTML = data.type;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.money;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onclick="onDelete(this)">Delete</a>
                        <a onclick="edit(this)">Change Name</a>`
  
}
function resetForm(){
    document.getElementById('title').value = "";
    document.getElementById('type').value = "";
    document.getElementById('money').value = "";
    selectedRow = null;
}

function edit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('title').value = selectedRow.cells[0].innerHTML;
}

function onDelete(td){
    if(confirm('Are you sure to delete this?')){
        row = td.parentElement.parentElement;
        document.getElementById('booklist').deleteRow(row.rowIndex);
        resetForm();
    }
}