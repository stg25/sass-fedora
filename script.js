
function dropdownMenu() {
  var dropdownOrder = $(".dropdownOrder");
  dropdownOrder.toggleClass("dropdownOrderShow");

}

// Init function

function init() {
  var doc = $(document);

  doc.on("click", "#dropdown", dropdownMenu)

}

$(document).ready(init);
