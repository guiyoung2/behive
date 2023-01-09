$(function () {
  // $(".sub").hide();
  let menu = $(".menu");

  menu.on("mouseover", function () {
    $(this).find(".sub").stop().slideDown(300);
  });
  menu.on("mouseleave", function () {
    $(this).find(".sub").stop().slideUp(300);
  });

  $(document).ready(function () {
    $(".m_menu > .m_gnb > li:nth-child(1) > a").click(function (event) {
      event.preventDefault();
      if ($(this).next().css("display") == "none") {
        $(".sub:visible").slideUp();
        $(".m_menu > .m_gnb > li > a").removeClass("active");
        $(this).next().slideDown();
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
        $(this).next().slideUp();
      }
    });
    $(".m_btn").on("click", function () {
      $(".m_bg").show();
      $(".m_menu_area").show();
    });
    $(".m_bg").on("click", function () {
      $(".m_bg").hide();
      $(".m_menu_area").hide();
    });
  });
});
