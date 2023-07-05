var width = $(window).innerWidth();

if (width <= 768) {
  $(".slider").slick({
    speed: 300,
  });
} else {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "0",
    speed: 300,
    slidesToShow: 1,
    // responsive: [
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       arrows: true,
    //       centerMode: true,
    //       centerPadding: "0",
    //       slidesToShow: 1
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: "0",
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });
}
