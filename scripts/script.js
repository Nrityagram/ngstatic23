const navToggle = document.querySelector(".nav-toggle-label");

function navBarScrollAction() {
  // if scrollTop returns 1 it means the scrollbar is not at the very top
  if ($(window).scrollTop()) {
    $("header").addClass("blackbg");
    $(".logo").addClass("shrink");
  } else {
    var h = document.getElementsByClassName("nav-open");
    if (h.length) {
      // HAM is open
      $("header").addClass("blackbg");
    } else {
      $("header").removeClass("blackbg");
      $(".logo").removeClass("shrink");
    }
  }
}

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav-open");
  this.navBarScrollAction();
});

// function to set nav bar background to black when scrolling down
$(window).scroll(function () {
  this.navBarScrollAction();
});

function set_reset_menu() {
  if (document.getElementsByClassName("nav-toggle-label").checked == true) {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (
        inputs[i].type.toLowerCase() == "checkbox" &&
        inputs[i].className != "nav-toggle-label"
      ) {
        inputs[i].checked = false;
      }
    }
  }
}

function close_menu() {
  $(".nav-toggle-label").removeClass("nav-open");
  $("#mobilemenu-form")[0].reset();
}

function hideAllSubmenus() {
  var e_list = document.getElementsByClassName("submenu");
  for (let index = 0; index < e_list.length; index++) {
    const e = e_list[index];
    e.className = "submenu";
  }
  e_list = document.getElementsByClassName("submenu-last");
  for (let index = 0; index < e_list.length; index++) {
    const e = e_list[index];
    e.className = "submenu-last";
  }
}

// Make the submenu display even when not hovering over item
function showSubmenu(element) {
  if (
    element.children[0].className == "submenu show" ||
    element.children[0].className == "submenu-last show"
  ) {
    return false;
  } else {
    hideAllSubmenus();
    // get the submenu child node and add "show" class to it
    if (element.children[0].className == "submenu") {
      element.children[0].className = "submenu show";
    }
    if (element.children[0].className == "submenu-last") {
      element.children[0].className = "submenu-last show";
    }
  }
}

function hideSubmenu(element) {
  if (element.className == "submenu show") {
    element.className = "submenu";
  }
  if (element.className == "submenu-last show") {
    element.className = "submenu-last";
  }
}

window.onbeforeunload = function () {
  // make sure the mobile nav menu is closed before unloading current page
  this.close_menu();
};

// prevent download of images through mouse events
$(document).ready(function () {
  $("img").bind("contextmenu", function (e) {
    return false;
  });
});

// Disable right-clicking by JavaScript
/**
 * Disable right-click of mouse, F12 key, and save key combinations on page
 * By Arthur Gareginyan (https://www.arthurgareginyan.com)
 * For full source code, visit https://mycyberuniverse.com
 */
// window.onload = function () {
//   document.addEventListener(
//     "contextmenu",
//     function (e) {
//       e.preventDefault();
//     },
//     false
//   );
//   document.addEventListener(
//     "keydown",
//     function (e) {
//       //document.onkeydown = function(e) {
//       // "I" key
//       if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//         disabledEvent(e);
//       }
//       // "J" key
//       if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//         disabledEvent(e);
//       }
//       // "S" key + macOS
//       if (
//         e.keyCode == 83 &&
//         (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
//       ) {
//         disabledEvent(e);
//       }
//       // "U" key
//       if (e.ctrlKey && e.keyCode == 85) {
//         disabledEvent(e);
//       }
//       // "F12" key
//       if (event.keyCode == 123) {
//         disabledEvent(e);
//       }
//     },
//     false
//   );
//   function disabledEvent(e) {
//     if (e.stopPropagation) {
//       e.stopPropagation();
//     } else if (window.event) {
//       window.event.cancelBubble = true;
//     }
//     e.preventDefault();
//     return false;
//   }
//   // disable drag and drop of images
//   $("img").on("dragstart", false);
// };
