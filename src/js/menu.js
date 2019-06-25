$(".menu-toggle").on('click', function () {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});

$(".menu-section a").on('click', function () {
  $('.menu-toggle').click();
});