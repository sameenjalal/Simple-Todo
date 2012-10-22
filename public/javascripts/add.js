$(function() {
  $("#submit_form").submit(function(form) {
    form.preventDefault();
    $.ajax({
      url: "/add",
      type: "POST",
      data: $(this).serialize(),
      success: function(response) {
        if (response.item.length > 0) {
          $("#tasks_list").prepend("<li>" + response.item + "</li>");
        }
      },
      failure: function() {
        console.log("Failed");
      }
    });
  });
});
