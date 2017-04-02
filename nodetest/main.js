
var table = document.getElementById('myTable');

$('.navbar-form').submit(function() {
    text = jQuery("input#text").val();
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/user/email',
        data: {email: text},
        dataType: 'json'
    })
        .done(function (response) {
            console.log(response);
            for (var c = 0; c < response.length; c++) {
                    var cells = [];
                    if (table.rows.length > 3) {
                        table.deleteRow(table.rows.length - 1);
                        var row = table.insertRow(table.rows.length);
                    } else {
                        var row = table.insertRow(table.rows.length);
                    }
                    for (var i = 0; i < 5; i++) {
                        cells[i] = row.insertCell(i);
                    }
                    cells[0].innerHTML = c;
                    cells[1].innerHTML = response[c].name;
                    cells[2].innerHTML = response[c].soname;
                    cells[3].innerHTML = response[c].email;
                    cells[4].innerHTML = response[c].birthday;
                }
        });
});



