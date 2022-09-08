$(function () {
  let header = $("#header"),
    modelsH = $("#models").innerHeight(),
    scrolloffsets = $(window).scrollTop();

  /* Fixed Header */
  checkScroll(scrolloffsets);

  $(window).on("scroll", function () {
    scrolloffsets = $(this).scrollTop();

    checkScroll(scrolloffsets);
  });

  function checkScroll(scrolloffsets) {
    if (scrolloffsets >= modelsH) {
      header.addClass("header-fixed");
    } else {
      header.removeClass("header-fixed");
    }
  }

  /* Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let $this = $(this),
      blockId = $this.data("scroll"),
      blockOffsets = $(blockId).offset().top;
    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffsets,
      },
      700
    );
  });

  /* Menu nav toggle*/

  $("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });
});
