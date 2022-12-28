$(function () {
  // $(".sub").hide();
  let menu = $(".menu");

  menu.on("mouseover", function () {
    $(this).find(".sub").stop().slideDown(300);
  });
  menu.on("mouseleave", function () {
    $(this).find(".sub").stop().slideUp(300);
  });
});
