var width;
var scroll_y;

window.onload = function () {
  width = $(window).innerWidth();
  var cardpanels = document.getElementsByTagName("cardpanel");

  // iPad and below
  if (width < 769) {
    for (let cardpanel of cardpanels) {
      cardpanel.classList.add("board-wrap");
    }
  } else {
    for (let cardpanel of cardpanels) {
      cardpanel.classList.remove("board-wrap");
    }
  }

  reset_bios();

  // const elmnt = document.getElementById("nirupama");
  // elmnt.scrollIntoView({
  //   behavior: "auto",
  //   block: "center",
  //   inline: "center",
  // });
};

function scroll_biopic_center(bio_id) {
  const elmnt = document.getElementById(bio_id);
  elmnt.scrollIntoView({
    behavior: "smooth",
    block: "bottom",
    inline: "bottom",
  });
  // const wrapperElement = document.getElementById("niruwrapper");
  // const absoluteElementTop = elmnt.offsetTop + elmnt.clientHeight / 2;
  // const underband = absoluteElementTop - wrapperElement.clientHeight / 2;
  // wrapper.scrollTo(0, underband);
}

function reset_bios() {
  //   var bio_elements = document.getElementsByClassName("bio");
  //   var caption_elements = document.getElementsByTagName("photo-caption");
  var pic;

  $(".biopic img").css("-webkit-filter", "grayscale(100%)");
  $(".biopic img").css("filter", "grayscale(100%)");
  $("photo-caption").css("color", "#000");
  $(".bio").css("display", "none");

  turn_on_mouse_hover_effect();
}

function turn_on_mouse_hover_effect() {
  $(".biopic").mouseover(
    function () {
      $(this).children("img").css("-webkit-filter", "grayscale(0)");
    },
    function () {
      $(this).children("img").css("filter", "grayscale(0)");
    }
    // function () {
    //   $(this).siblings("photo-caption").css("color", "#df0f1c");
    // }
  );
  $(".biopic").mouseout(
    function () {
      $(this).children("img").css("-webkit-filter", "grayscale(100%)");
    },
    function () {
      $(this).children("img").css("filter", "grayscale(100%)");
    }
    // function () {
    //   $(this).siblings("photo-caption").css("color", "#000");
    // }
  );
}

function bio_toggle(e) {
  reset_bios();
  // get all elements that have the board member's name (e.classList.value)
  var member_elements = document.getElementsByClassName(e.classList[0]);

  // iPad and below
  if (width < 769) {
    // setting desc display to block
    member_elements[1].style.display = "block";
  } else {
    // setting common-desc display to block
    member_elements[2].style.display = "block";
    member_elements[0].scrollIntoView({ behavior: "smooth" });
  }

  $(".biopic").off("mouseover");
  $(".biopic").off("mouseout");

  // set photo to color
  member_elements[0].firstElementChild.lastElementChild.style[
    "-webkit-filter"
  ] = "grayscale(0%)";
  member_elements[0].firstElementChild.lastElementChild.style["filter"] =
    "grayscale(0%)";
  member_elements[0].nextElementSibling.style["color"] = "#df0f1c";
}
