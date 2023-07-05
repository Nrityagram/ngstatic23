var width;
var scroll_y;

window.onload = function () {
  width = $(window).innerWidth();

  var is_intro = false,
    is_support_wrapper_section = false,
    is_donate_buttons_wrapper = false,
    is_info_text_elems = false;
  var intro_section,
    support_wrapper_section,
    donate_buttons_wrapper,
    info_text_elems;

  if ((intro_section = document.getElementById("intro"))) {
    is_intro = true;
  }
  if (
    (support_wrapper_section = document.getElementById(
      "areas-of-support--wrapper"
    ))
  ) {
    is_support_wrapper_section = true;
  }
  if (
    (donate_buttons_wrapper = document.getElementById("donate-buttons-wrapper"))
  ) {
    is_donate_buttons_wrapper = true;
  }
  if ((info_text_elems = document.getElementsByClassName("info"))) {
    is_info_text_elems = true;
  }

  // iPad and below
  if (width < 769) {
    if (is_intro) {
      intro_section.classList.remove("flex-row");
      intro_section.classList.add("flex-col");
    }
    if (is_support_wrapper_section) {
      support_wrapper_section.classList.remove("flex-row");
      support_wrapper_section.classList.add("flex-col-reverse");
    }
    if (is_donate_buttons_wrapper) {
      donate_buttons_wrapper.classList.add("flex-row");
      donate_buttons_wrapper.classList.remove("flex-col");
    }
    if (is_info_text_elems) {
      info_text_elems[0].classList.remove("center-txt");
    }
  } else {
    if (is_intro) {
      intro_section.classList.add("flex-row");
      intro_section.classList.remove("flex-col");
    }
    if (is_support_wrapper_section) {
      support_wrapper_section.classList.add("flex-row");
      support_wrapper_section.classList.remove("flex-col-reverse");
    }
    if (is_donate_buttons_wrapper) {
      donate_buttons_wrapper.classList.remove("flex-row");
      donate_buttons_wrapper.classList.add("flex-col");
    }
    if (is_info_text_elems) {
      info_text_elems[0].classList.add("center-txt");
    }
  }
};

$(".open-donate-box").click(function () {
  $(".pop-modal").css("display", "block");
  $("#passport").css("display", "block");
  $("#razorpay-button").css("display", "none");
  $(".pay-pentacle").css("display", "none");
  $(".pay-wiretransfer").css("display", "none");
  var val, elem_list;
  val = "show-input";
  elem_list = document.getElementsByClassName(val);
  for (let e = 0; e < elem_list.length; e++) {
    elem_list[e].checked = false;
  }
});
$("#hide-donate-box").click(function () {
  if (document.getElementById("india")) {
    document.getElementById("india").checked = false;
  }
  if (document.getElementById("nri")) {
    document.getElementById("nri").checked = false;
  }
  if (document.getElementById("othercountry")) {
    document.getElementById("othercountry").checked = false;
  }
  if (document.getElementsByClassName("pop-modal")) {
    $(".pop-modal").css("display", "none");
  }
  if (document.getElementById(razorbuttonID)) {
    var btn = document.getElementById(razorbuttonID);
    btn.classList.add("hide");
  }
});
$("#hide-x").click(function () {
  if (document.getElementById("india")) {
    document.getElementById("india").checked = false;
  }
  if (document.getElementById("nri")) {
    document.getElementById("nri").checked = false;
  }
  if (document.getElementById("othercountry")) {
    document.getElementById("othercountry").checked = false;
  }
  if (document.getElementsByClassName("pop-modal")) {
    $(".pop-modal").css("display", "none");
  }
  if (document.getElementById(razorbuttonID)) {
    var btn = document.getElementById(razorbuttonID);
    btn.classList.add("hide");
  }
});

$("#india").click(function () {
  if (document.getElementsByClassName("header-bar")) {
    $(".header-bar").css("display", "none");
  }
  if (document.getElementsByClassName("pop-box")) {
    $(".pop-box").css("display", "none");
  }
  $("#passport").css("display", "none");
  // This is for the correct donation page to show up
  // Using the Danamojo Donation Page - either danamojo code injection or a pdf
  switch (razorbuttonID) {
    case "make-donation":
      location.href = "makeadonation.html";
      break;
    case "young-giver":
      location.href = "becomeyounggiver.html";
      break;
    case "fan":
      location.href = "becomefan.html";
      break;
    case "believer":
      location.href = "becomebeliever.html";
      break;
    case "supporter":
      location.href = "becomesupporter.html";
      break;
    case "champion":
      location.href = "becomechampion.html";
      break;
    // For NG Angels we are not going to Danamojo because amounts are too large
    case "village-children-sch":
      location.href = "villagechildscholar.html";
      break;
    case "legacy-sch":
      location.href = "legacyscholar.html";
      break;
    case "art-dir-circle":
      location.href = "artisticdirectorcircle.html";
      break;
    default:
      var btn = document.getElementById(razorbuttonID);
      btn.classList.remove("hide");
      break;
  }
});

$("#nri").click(function () {
  if (document.getElementsByClassName("header-bar")) {
    $(".header-bar").css("display", "none");
  }
  if (document.getElementsByClassName("pop-box")) {
    $(".pop-box").css("display", "none");
  }
  $("#passport").css("display", "none");
  // This is for the correct donation page to show up
  // Using the Danamojo Donation Page
  switch (razorbuttonID) {
    case "make-donation":
      location.href = "makeadonation.html";
      break;
    case "young-giver":
      location.href = "becomeyounggiver.html";
      break;
    case "fan":
      location.href = "becomefan.html";
      break;
    case "believer":
      location.href = "becomebeliever.html";
      break;
    case "supporter":
      location.href = "becomesupporter.html";
      break;
    case "champion":
      location.href = "becomechampion.html";
      break;
    // For NG Angels we are not going to Danamojo because amounts are too large
    case "village-children-sch":
      location.href = "villagechildscholar_other.html";
      break;
    case "legacy-sch":
      location.href = "legacyscholar_other.html";
      break;
    case "art-dir-circle":
      location.href = "artisticdirectorcircle_other.html";
      break;
    default:
      var btn = document.getElementById(razorbuttonID);
      btn.classList.remove("hide");
      break;
  }
});

$("#usa").click(function () {
  if (document.getElementsByClassName("header-bar")) {
    $(".header-bar").css("display", "none");
  }
  if (document.getElementsByClassName("pop-box")) {
    $(".pop-box").css("display", "none");
  }
  $("#passport").css("display", "none");
  // This is for the correct donation page to show up
  // Using the Danamojo Donation Page
  switch (razorbuttonID) {
    case "make-donation":
      location.href = "makeadonation_usa.html";
      break;
    case "young-giver":
      location.href = "becomeyounggiver_other.html";
      break;
    case "fan":
      location.href = "becomefan_other.html";
      break;
    case "believer":
      location.href = "becomebeliever_other.html";
      break;
    case "supporter":
      location.href = "becomesupporter_other.html";
      break;
    case "champion":
      location.href = "becomechampion_other.html";
      break;
    // For NG Angels we are not going to Danamojo because amounts are too large
    case "village-children-sch":
      location.href = "villagechildscholar_other.html";
      break;
    case "legacy-sch":
      location.href = "legacyscholar_other.html";
      break;
    case "art-dir-circle":
      location.href = "artisticdirectorcircle_other.html";
      break;
    default:
      var btn = document.getElementById(razorbuttonID);
      btn.classList.remove("hide");
      break;
  }
});

$("#othercountry").click(function () {
  if (document.getElementsByClassName("header-bar")) {
    $(".header-bar").css("display", "none");
  }
  if (document.getElementsByClassName("pop-box")) {
    $(".pop-box").css("display", "none");
  }
  $("#passport").css("display", "none");
  // This is for the correct donation page to show up
  // Using PDF Page for non-indian citizens
  switch (razorbuttonID) {
    case "make-donation":
      location.href = "makeadonation_other.html";
      break;
    case "young-giver":
      location.href = "becomeyounggiver_other.html";
      break;
    case "fan":
      location.href = "becomefan_other.html";
      break;
    case "believer":
      location.href = "becomebeliever_other.html";
      break;
    case "supporter":
      location.href = "becomesupporter_other.html";
      break;
    case "champion":
      location.href = "becomechampion_other.html";
      break;
    // For NG Angels we are not going to Danamojo because amounts are too large
    case "village-children-sch":
      location.href = "villagechildscholar_other.html";
      break;
    case "legacy-sch":
      location.href = "legacyscholar_other.html";
      break;
    case "art-dir-circle":
      location.href = "artisticdirectorcircle_other.html";
      break;
    default:
      var btn = document.getElementById(razorbuttonID);
      btn.classList.remove("hide");
      break;
  }
});
