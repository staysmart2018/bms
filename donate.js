function showInfo(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Data collection
    var applicationNo = Math.floor(100000 + Math.random() * 900000);
    var bloodGroup = document.getElementById("bloodGroup").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var center = document.getElementById("selectCenter").value;
    var time = document.getElementById("selectTime").value;

    // Information to display
    var title = "<div class='mb-5'><h1>Thanks for Booking</h1><h2>Check your information below</h2></div>";
    var notice = "<p class='mt-5'>- Reach the center on time. Use your name or application number to donate the blood.</p>";

    var info = '<table class="table table-hover table-bordered">' +
               '<tr><th>Application Number</th><td>' + applicationNo + '</td></tr>' +
               '<tr><th>Name</th><td>' + firstName + ' ' + lastName + '</td></tr>' +
               '<tr><th>Age</th><td>' + age + '</td></tr>' +
               '<tr><th>Blood Group</th><td>' + bloodGroup + '</td></tr>' +
               '<tr><th>Center</th><td>' + center + '</td></tr>' +
               '<tr><th>Time</th><td>' + time + '</td></tr>' +
               '</table>';

    // Update content
    var content = document.getElementById("donate-info");
    content.innerHTML = title + info + notice;
}
