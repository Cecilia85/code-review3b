//Back-End//
var pingPong = function(number) {
  var result=[];
  var index;
  var x=[];
  for (var index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
    result.push("pingpong");
    } else if (index % 3 === 0) {
    result.push("ping");
    } else if (index % 5 === 0) {
    result.push("pong");
    } else {
    result.push(index);
    }

  }
return result;
};

//Front-End//
$(document).ready(function () {
  $("#blanks form").submit(function(event) {

    // var userInput = parseInt($("input#number").val());
    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    if (isNaN(number)) {
          alert("Please enter a number")
      };
      result.forEach(function(index) {
        $(".uncover").append("<li>" + index + "</li>");
      });
      $("#output").show();

      event.preventDefault();
});
});
