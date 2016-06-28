//Back-End//
var pingPong = function(number) {
  var result;
  for (var index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
         result= "pingpong";
    } else if (index % 3 === 0) {
         result= "ping";
    } else if (index % 5 === 0) {
         result= "pong";
    } else {
         result= "index";
    }
    return result;
  }
};
//Front-End//
$(document).ready(function () {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var userInput= parseInt($("input#number").val());
    var inputs=pingPong(userInput);
    var index=[];
    // pingPong(inputs);
    // $(".list").append("<li>" + "pingpong" + "</li>");
    // $(".list").append("<li>" + "ping" + "</li>");
    // $(".list").append("<li>" + "pong" + "</li>");
    // $(".list").append("<li>" + index + "</li>");
    $("#output").show("<li>" + "pingpong" + "</li>");
    $("#output").show("<li>" + "ping" + "</li>");
    $("#output").show("<li>" + "pong" + "</li>");
    $("#output").show("<li>" + index + "</li>");

  });
});
