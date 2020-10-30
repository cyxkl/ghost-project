//hide image
$(".hide-button").click(function() {
  $(".ghost-image").hide();
});

//show image
$(".show-button").click(function() {
  $(".ghost-image").show();
});

//change image
$(".update-img-button").click(function() {
  $(".ghost-image").attr("src", "https://pbs.twimg.com/profile_images/1247040888557076481/J0jP_aBA_400x400.jpg");
});

//send image
$(".message-button").click(function() {
  let message=$(".input").val()
  $(".message").append(message)
});

//name image
$(".name-button").click(function() {
  let name=$(".input").val()
  $(".namething").text(`Your name is ${name}`)
});