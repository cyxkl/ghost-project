$(".hide-button").click(function() {
  $(".ghost-image").hide();
});

$(".show-button").click(function() {
  $(".ghost-image").show();
});

$(".update-img-button").click(function() {
  $(".ghost-image").attr("src", "https://pbs.twimg.com/profile_images/1247040888557076481/J0jP_aBA_400x400.jpg");
});

$(".message-button").click(function() {
  let message=$(".input").val()
  $(".message").append(message)
});

$(".name-button").click(function() {
  let name=$(".input").val()
  $(".namethig").html(name "is your name")
});