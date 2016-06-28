//Back-End//
var pingPong = function(number) {
  var result;
  var index;
  for (var index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
    result = "pingpong";
    } else if (index % 3 === 0) {
    result = "ping";
    } else if (index % 5 === 0) {
    result = "pong";
    } else {
    result = index;
    }
    return result;
  }
};
//Front-End//
$(document).ready(function () {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var result = pingPong(userInput);
   $("#output").append("<li>"+ result + "</li>");


  });
});
