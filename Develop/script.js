var nineAM = $("#hour-09");
var hoursEl = $(".time-block");
var currentDayEl = $("#currentDay");

$(document).ready(function () {
  console.log(currentDayEl);
  currentDayEl.text(
    "Today is " + dayjs().format("dddd") + " " + dayjs().format("MMMM D")
  );

  let currentHourStr = dayjs().format("HH");
  let currentHour = parseInt(currentHourStr);
  console.log(currentHour);

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
