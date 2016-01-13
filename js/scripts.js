$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var gender = $("select#gender").val();
    var personality = $("select#personality").val();
    // var occupation = $("select#occupation").val();

      if (gender === 'male' && personality === 'extrovert') {
        $("#result2, #result3, #result4").hide();
        $("#result1").show();
        console.log("result1 showing");
      } else if (gender === 'male' && personality === 'introvert') {
        $("#result1, #result3, #result4").hide();
        $("#result2").show();
        $("#result1, #result3, #result4").hide();
      } else if (gender === 'female' && personality === 'extrovert') {
        $("#result1, #result2, #result4").hide();
        $("#result3").show();
      } else {
        $("#result1, #result2, #result3").hide();
        $("#result4").show();
      }








    event.preventDefault();
  });
});
