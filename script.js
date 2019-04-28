
// shows dropdown menu

function showDropdownMenu() {
  var dropdownOrder = $(".dropdownOrder");
  dropdownOrder.toggleClass("showDropdownOrder");
}

// show languages on flags

function showLanguages() {
  var me = $(this);
  var finded = me.find("div.language");

  finded.removeClass("language");
  finded.addClass("showLanguage");
}

// hide languages on flags

function hideLanguages() {
  var me = $(this);
  var finded = me.find("div.showLanguage");

  finded.removeClass("showLanguage");
  finded.addClass("language");
}

// first container carousel

function changeImg() {
  var container = $(".first-container");
  container.toggleClass("img2");
}

// Init function

function init() {
  var doc = $(document);
  // show dropdown
  doc.on("click", "#dropdown", showDropdownMenu);
  // show language
  doc.on("mouseenter", ".single-country", showLanguages);
  // hide language
  doc.on("mouseleave", ".single-country", hideLanguages);
  // img carousel every 10 seconds
  setInterval(function () {
    var container = $(".first-container");
    container.toggleClass("img2");
  }, 10000)

}

$(document).ready(init);
