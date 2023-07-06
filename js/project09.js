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

  $(".mainslide").slick({
    arrows: false,
    autoplay: true,
    autoplayspeed: 5000,
  });

  //롤링 배너 복제본 생성
  let roller = document.querySelector(".best_content");
  roller.id = "roller1";

  let clone = roller.cloneNode(true);
  clone.id = "roller2";
  document.querySelector(".wrap").appendChild(clone); //부착

  //원본, 복제본 배너 위치 지정
  document.querySelector("#roller1").style.left = "0px";
  document.querySelector("#roller2").style.left =
    document.querySelector(".best_content ul").offsetWidth + "px";

  //클래스 할당
  roller.classList.add("original");
  clone.classList.add("clone");

  $(".main_content .tab_list li").on("click", function () {
    const idx = $(this).index();
    $(".main_content .tab_con li")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
    $(this).addClass("on").siblings().removeClass("on");
  });

  function updateTimer() {
    const future = Date.parse("2023/07/06 23:00:00");
    const now = new Date();
    const diff = future - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    const d = days;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;
    document.getElementById("timer").innerHTML =
      "<div>" +
      d +
      "<span>Days</span></div>" +
      "<div>" +
      h +
      "<span>Hours</span></div>" +
      "<div>" +
      m +
      "<span>Minutes</span></div>" +
      "<div>" +
      s +
      "<span>Seconds</span></div>";
  }

  setInterval(updateTimer, 1000);

  $(".main_sale .sale_slide").slick({
    slidesToShow: 4,
    arrows: false,
  });

  $(".main_sale .arrows .left").on("click", function () {
    $(".sale_slide").slick("slickPrev");
  });
  $(".main_sale .arrows .right").on("click", function () {
    $(".sale_slide").slick("slickNext");
  });

  $(".heart").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("on");
  });
  let cartNum = 0;

  $(".cart").on("click", function (e) {
    e.preventDefault();

    if ($(this).hasClass("on")) {
      alert("이미 장바구니에 담았어요");
      return;
    } else {
      cartNum = cartNum + 1;
    }
    $(this).addClass("on");
    console.log(cartNum);
    $(".header .bottom_icon small").text(cartNum);
  });
});
