

// Create a variable to reference the database
var database = firebase.database();

// Initial Variables (SET the first set IN FIREBASE FIRST)
// Note remember to create these same variables in Firebase!
var newTrain = "Add new Train";
var newArivial = 0;
var newRoute = 0;

// Click Button changes what is stored in firebase
$("#add-route").on("click", function() {
  // Prevent the page from refreshing
  event.preventDefault();

  // Get inputs
  newTrain = $("#new-train")
    .val()
    .trim();
  newArivial = $("#new-arivial")
    .val()
    .trim();
  newRoute = $("#new-route")
    .val()
    .trim();

  // Change what is saved in firebase
  database.ref().set({
    train: newTrain,
    arrivial: newArivial,
    route: newRoute,
  });
});

// add row for train sample code
$(".add-row").click(function(){


    // <input type="text" id="departures-" placeholder="Departures">
    // <input type="text" id="train" placeholder="train">
    // <input type="text" id="frequency" placeholder="frequency">
    // <input type="text" id="next-arrivial" placeholder="Next Arrivial">
    // <input type="text" id="arrives" placeholder="arrives">
    // <input type="button" class="add-row" value="Add Row">


    var departures = $("#departures-add").val().trim();
    var train = $("#train-add").val().trim();
    var frequency = $("#frequency-add").val().trim();
    var  nextArivial= $("#next-arivial-add").val().trim();
    var  arives= $("#arives-add").val().trim();
    var status=$("#status-add").val().trim();
    // sample line used to create markup
    // var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + email + "</td></tr>";
    var markup = "<tr><td><input type='checkbox' name='record'></td> <td class='table', id='departures'>" + departures  + "</td > <td class='train'>" + train + "</td><td class='frequency' >"+ frequency + "</td><td class='next-arrival' id='train-time' >"+ nextArivial + "</td ><td class='arrives' id='arrivial-min' >"+ arives + "</td><td class='status' id='status'><strong>" + status +"</strong></td></tr>";
    $("table tbody").append(markup);
});

// Find and remove selected table rows
$(".delete-row").click(function(){
    $("table tbody").find('input[name="record"]').each(function(){
        if($(this).is(":checked")){
            $(this).parents("tr").remove();
        }
    });
});

// Capture Button Click
$("#add-route").on("click", function() {
  // Don't refresh the page!
  event.preventDefault();


});

// ------------------------Clock Code----------
function clock() {
  var currentTime = new Date();
  // plays cargo train sound on the add trains form

  var diem = "am";
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();
  // uncomment the lines below to show the clock in am/pm format
  // if( h == 0){
  //     h=12;
  // }else if(h>12){
  //     h=h-12;
  //     diem ="pm"
  // }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  var myClock = document.getElementById("zulu");
  myClock.textContent = h + ":" + m + ":" + s + "" + diem;
  setTimeout("clock()", 1000);
  if (s < "30") {
    $("#train-1-time").text("Boarding Now!");
    $("#train-2-time").text("soon...verry soon.");
    $("#train-3-time").text("Boarding Now!");
    $("#train-4-time").text("soon...verry soon.");
    $("#arrivial-1-min").text("Yes");
    $("#arrivial-2-min").text("oh no");
    $("#arrivial-3-min").text("Yes");
    $("#arrivial-4-min").text("oh no");
  } else {
    $("#train-1-time").text("soon...verry soon.");
    $("#train-2-time").text("Boarding Now!");
    $("#train-3-time").text("soon...verry soon.");
    $("#train-4-time").text("Boarding Now!");
    $("#arrivial-1-min").text("no way");
    $("#arrivial-2-min").text("oh ya");
    $("#arrivial-3-min").text("no way");
    $("#arrivial-4-min").text("oh ya");
  }
}

clock();

//
