var table = document.getElementById('myTable');

function textFind() {
    var text = document.getElementById("text").value;
    start(text);
}

function start(text) {
    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "http://localhost:3001/user/email?email=" + text;

    xhr.open(method, url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            try {
                print(xhr.responseText);
            } catch (err) {
                console.log(err.message + " in " + xhr.responseText);
                return false;
            }
        }
    };

    xhr.send();
}

function print(responseText) {
    console.log(responseText);
    var data = JSON.parse(responseText);
    for (var i = 0; i < data.length; i++) {

        var row = table.insertRow(table.rows.length - 1);

        if (table.rows.length > 3) {
            table.deleteRow(table.rows.length - 1);
            var row = table.insertRow(table.rows.length);
        } else {
            var row = table.insertRow(table.rows.length);
        }

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = (i + 1);
        cell2.innerHTML = data[i]["name"];
        cell3.innerHTML = data[i]["soname"];
        cell4.innerHTML = data[i]["email"];
        cell5.innerHTML = data[i]["birthday"];

    }
}
