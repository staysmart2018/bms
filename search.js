var infoSpace = document.getElementById("infoSpace");

function showInfo(event) {
    var bloodGroup = document.getElementById("bloodGroup").value;
    event.preventDefault();
    fetch("data.json").then((res)=>{return res.json()}).then((data)=>{
        data = data[bloodGroup];
        var length = data.length;
        var table = '<table class="table table-hover table-bordered mt-5"><tr><th>Hospital</th><th>Available</th></tr>';
        for (let index = 0; index < length; index++) {
            table = table + "<tr><th>"+data[index][0]+"</th><td>"+data[index][1]+"</td></tr>";
        }
        table = table + "</table>"
        infoSpace.innerHTML = table;
    });
}