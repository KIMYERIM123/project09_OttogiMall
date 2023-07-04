$(function () {
  $(".header_top .top_inner i").on("click", function () {
    $(".header_top").hide();
  });

  var bottom = $(".header_bottom").offset().top;
  $(window).scroll(function () {
    var window = $(this).scrollTop();

    if (bottom <= window) {
      $(".header_bottom").addClass("fixed");
    } else {
      $(".header_bottom").removeClass("fixed");
    }
  });

  $(".mainslide").sick({
    arrows: false,
    autoplay: true,
    autoplayspeed: 5000,
  });
});
