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
  let roller = document.querySelector('.best_content');
  roller.id = 'roller1';

  let clone = roller.cloneNode(true);
  clone.id = 'roller2';
  document.querySelector('.wrap').appendChild(clone); //부착

  //원본, 복제본 배너 위치 지정
  document.querySelector('#roller1').style.left = '0px';
  document.querySelector('#roller2').style.left = document.querySelector('.best_content ul').offsetWidth + 'px';

  //클래스 할당
  roller.classList.add('original');
  clone.classList.add('clone');

  $('.best_content .heart').click(function () {
    $(this).css('color', 'red');
  });

  $('.main_content .tab_list li').on('click', function () {
    const idx = $(this).index();
    $('.main_content .tab_con li').eq(idx).addClass('on').siblings().removeClass('on')
    $(this).addClass("on").siblings().removeClass("on");
  })

});
