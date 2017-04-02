// Find a <table> element with id="myTable":
var table = document.getElementById('myTable');


// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);

// Add some text to the new cells:
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";
cell3.innerHTML = "NEW CELL3";
cell4.innerHTML = "NEW CELL4";
cell5.innerHTML = '<button class="btn btn-success" onclick="editRow()">Edit</button>';

function insertRow(rowIndex) {

    if (rowIndex == undefined) {
        rowIndex = table.rows.length - 2;
    }
    var row = table.insertRow(rowIndex);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = document.getElementById('cell1').value;
    cell2.innerHTML = document.getElementById('cell2').value;
    cell3.innerHTML = document.getElementById('cell3').value;
    cell4.innerHTML = document.getElementById('cell4').value;
    cell5.innerHTML = '<button class="btn btn-success">Edit</button>';

    table.deleteRow(rowIndex+1);

}

$(".btn-success").on("click", function(event, elem){
    $(this).closest("tr").find("td").each(function(idx, itm){
        console.log(itm);
        if (idx != 4) {
            itm.innerHTML = '<input type="text" class="form-control" id="cell' + (idx + 1) + '" size="10" value="' + itm.innerHTML + '">';
        } else {
            itm.innerHTML = '<button class="btn btn-info" onclick="insertRow(this.parentNode.parentNode.rowIndex)">Submit</button>';
        }
    });
});