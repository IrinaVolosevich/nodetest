// Find a <table> element with id="myTable":
var table = document.getElementById('myTable');

function insertRow(value, rowIndex) {

    if (rowIndex == undefined) {
        rowIndex = table.rows.length - 1;
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
    cell5.innerHTML = '<button class="btn btn-success" onclick="add();">Edit</button>';

    if (value == true) {

        table.deleteRow(rowIndex + 1);

    }


    $(".btn-success").on("click", function (event, elem) {
        $(this).closest("tr").find("td").each(function (idx, itm) {

            if (idx != 4) {

                itm.innerHTML = '<input type="text" class="form-control" id="cell' + (idx + 1) + '" size="10" value="' + itm.innerHTML + '">';

            } else {

                itm.innerHTML = '<button class="btn btn-info" onclick="insertRow(true, this.parentNode.parentNode.rowIndex)">Submit</button>';

            }
        });
    });


}