var nineAM = $("#hour-09");
var tenAM = $("#hour-10");
var elevenAM = $("#hour-11");
var twelvePM = $("#hour-12");
var onePM = $("#hour-13");
var twoPM = $("#hour-14");
var threePM = $("#hour-15");
var fourPM = $("#hour-16");
var fivePM = $("#hour-17");
var nineAMbtn = $("#09btn");
var tenAMbtn = $("#10btn");
var elevenAMbtn = $("#11btn");
var twelvePMbtn = $("#12btn");
var onePMbtn = $("#13btn");
var twoPMbtn = $("#14btn");
var threePMbtn = $("#15btn");
var fourPMbtn = $("#16btn");
var fivePMbtn = $("#17btn");
var nineAMplan = $("#09plan");
var tenAMplan = $("#10plan");
var elevenAMplan = $("#11plan");
var twelvePMplan = $("#12plan");
var onePMplan = $("#13plan");
var twoPMplan = $("#14plan");
var threePMplan = $("#15plan");
var fourPMplan = $("#16plan");
var fivePMplan = $("#17plan");
var hoursEl = $(".time-block");
var currentDayEl = $("#currentDay");

$(document).ready(function () {
  // function loadData() {
  //   $(nineAM).children([1]).text = plan;
  //   localStorage.getItem("9AM, plan");
  // }

  console.dir(nineAM);
  nineGet();
  tenGet();
  elevenGet();
  twelveGet();
  oneGet();
  twoGet();
  threeGet();
  fourGet();
  fiveGet();

  nineAMbtn.on("click", function () {
    localStorage.setItem("9AM", JSON.stringify($("#09plan").val()));
  });

  function nineGet() {
    var nineAMsaved = JSON.parse(localStorage.getItem("9AM"));
    console.log(nineAMsaved);
    if (nineAMsaved !== null) {
      var newP = $("<p></p>");
      newP.text(nineAMsaved);
      nineAMplan.append(nineAMsaved);
    }
  }

  function tenGet() {
    var tenAMsaved = JSON.parse(localStorage.getItem("10AM"));
    console.log(tenAMsaved);
    if (tenAMsaved !== null) {
      var newP = $("<p></p>");
      newP.text(tenAMsaved);
      tenAMplan.append(tenAMsaved);
    }
  }

  function elevenGet() {
    var elevenAMsaved = JSON.parse(localStorage.getItem("11AM"));
    console.log(elevenAMsaved);
    if (elevenAMsaved !== null) {
      var newP = $("<p></p>");
      newP.text(elevenAMsaved);
      elevenAMplan.append(elevenAMsaved);
    }
  }

  function twelveGet() {
    var twelvePMsaved = JSON.parse(localStorage.getItem("12PM"));
    console.log(twelvePMsaved);
    if (twelvePMsaved !== null) {
      var newP = $("<p></p>");
      newP.text(twelvePMsaved);
      twelvePMplan.append(twelvePMsaved);
    }
  }

  function oneGet() {
    var onePMsaved = JSON.parse(localStorage.getItem("1PM"));
    console.log(onePMsaved);
    if (onePMsaved !== null) {
      var newP = $("<p></p>");
      newP.text(onePMsaved);
      onePMplan.append(onePMsaved);
    }
  }

  function twoGet() {
    var twoPMsaved = JSON.parse(localStorage.getItem("2PM"));
    console.log(twoPMsaved);
    if (twoPMsaved !== null) {
      var newP = $("<p></p>");
      newP.text(twoPMsaved);
      twoPMplan.append(twoPMsaved);
    }
  }

  function threeGet() {
    var threePMsaved = JSON.parse(localStorage.getItem("3PM"));
    console.log(threePMsaved);
    if (threePMsaved !== null) {
      var newP = $("<p></p>");
      newP.text(threePMsaved);
      threePMplan.append(threePMsaved);
    }
  }

  function fourGet() {
    var fourPMsaved = JSON.parse(localStorage.getItem("4PM"));
    console.log(fourPMsaved);
    if (fourPMsaved !== null) {
      var newP = $("<p></p>");
      newP.text(fourPMsaved);
      fourPMplan.append(fourPMsaved);
    }
  }

  function fiveGet() {
    var fivePMsaved = JSON.parse(localStorage.getItem("5PM"));
    console.log(fivePMsaved);
    if (fivePMsaved !== null) {
      var newP = $("<p></p>");
      newP.text(fivePMsaved);
      fivePMplan.append(fivePMsaved);
    }
  }

  tenAMbtn.on("click", function () {
    localStorage.setItem("10AM", JSON.stringify($("#10plan").val()));
  });

  elevenAMbtn.on("click", function () {
    localStorage.setItem("11AM", JSON.stringify($("#11plan").val()));
  });

  twelvePMbtn.on("click", function () {
    localStorage.setItem("12PM", JSON.stringify($("#12plan").val()));
  });

  onePMbtn.on("click", function () {
    localStorage.setItem("1PM", JSON.stringify($("#13plan").val()));
  });

  twoPMbtn.on("click", function () {
    localStorage.setItem("2PM", JSON.stringify($("#14plan").val()));
  });

  threePMbtn.on("click", function () {
    localStorage.setItem("3PM", JSON.stringify($("#15plan").val()));
  });

  fourPMbtn.on("click", function () {
    localStorage.setItem("4PM", JSON.stringify($("#16plan").val()));
  });

  fivePMbtn.on("click", function () {
    localStorage.setItem("1PM", JSON.stringify($("#17plan").val()));
  });

  console.log(currentDayEl);
  currentDayEl.text(
    "Today is " + dayjs().format("dddd") + " " + dayjs().format("MMMM D")
  );

  let currentHourStr = dayjs().format("HH");
  let currentHour = parseInt(currentHourStr);
  console.log(currentHour);

  returnInt(nineAM);
  returnInt(tenAM);
  returnInt(elevenAM);
  returnInt(twelvePM);
  returnInt(onePM);
  returnInt(twoPM);
  returnInt(threePM);
  returnInt(fourPM);
  returnInt(fivePM);

  function returnInt(item) {
    var id = item.attr("id");
    var numId = id.substr(5, 6);
    var intId = parseInt(numId);
    if (intId === currentHour) {
      $(item).attr("class", "row time-block present");
    } else if (intId < currentHour) {
      $(item).attr("class", "row time-block past");
    } else {
      $(item).attr("class", "row time-block future");
    }
  }

  returnInt(nineAM);

  // let hourId = hoursEl.getAttribute("id");
  // console.log(hourId);

  // blockHour = parseInt(divEl.attribute.id);
  // console.log(blockHour);

  // //get a value for each time block
  // function getValue(id) {
  //   //refer to the id
  //   //pull the 2 digits out of the index
  //   //join values into new string
  //   //parse integer from string
  // }

  // $(.timeblock).each( {
  //   var blockHour =
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

// <script src="path/to/dayjs/dayjs.min.js"></script>
// <script>
//   dayjs().format()
// </script>
