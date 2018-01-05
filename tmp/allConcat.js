import { Person } from './../js/person.js';

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    let name = $("#name").val();
    let birthdate = $("#birthdate").val();
    let current_date = $("#current_date").val();
    let gender = $("input:radio[name=gender]:checked").val();
    let ethnicity = $("#ethnicity").val();

    let user = new Person(name, birthdate, current_date, gender, ethnicity);
    console.log(user);

    $("#form").hide();
    $("#calculations").show();
  });
});
