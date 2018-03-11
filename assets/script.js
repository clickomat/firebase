
 // Initialize Firebase

  var config = {
    apiKey: "AIzaSyCcaahGj-A82d_EQiijgo-L_9cKJBpjvc4",
    authDomain: "trainschedule-e3b6a.firebaseapp.com",
    databaseURL: "https://trainschedule-e3b6a.firebaseio.com",
    projectId: "trainschedule-e3b6a",
    storageBucket: "trainschedule-e3b6a.appspot.com",
    messagingSenderId: "970921341649"
};
firebase.initializeApp(config);




var currentTime = moment();

// Create a variable to reference the database
var database = firebase.database();


// Click Button changes what is stored in firebase
$("#newRoute").on("click", function() {
  // Prevent the page from refreshing
  event.preventDefault();

  // Get inputs
  departures = $("#departures-add")
    .val()
    .trim();
  trainName = $("#train-add")
    .val()
    .trim();
  frequency = $("#frequency-add")
    .val()
    .trim();
    console.log(departures);
    console.log(trainName);
    console.log(frequency);

  // Change what is saved in firebase
  database.ref().push({
    departures: departures,
    trainName: trainName,
    frequency: frequency
  });
});

// add row for train sample code
$(".add-row").click(function(){

    var departures = $("#departures-add").val().trim();
    var train = $("#train-add").val().trim();
    var frequency = $("#frequency-add").val().trim();
    var nextArivial= $("#next-arivial-add").val().trim();
    var arives= $("#arives-add").val().trim();
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
  
}

clock();

//
