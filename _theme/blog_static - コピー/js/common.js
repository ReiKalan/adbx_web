jQuery(function($) {
  var lastIsSticky = undefined,
    $document = $(document),
    $header = $("header");

  $(window).on("scroll", function() {
    var scroll = $document.scrollTop(),
      isSticky = scroll > 90;

    if (lastIsSticky === isSticky) {
      return;
    }
    lastIsSticky = isSticky;

    if (isSticky) {
      $header.addClass("sticky")
    }
    else {
      $header.removeClass("sticky")
    }
  });
  
  //メニューの高さ分だけ下に下げる
  $(window).on("resize", function() {
    var height = $header.outerHeight();
    $("body").css("margin-top", height);
  }).triggerHandler("resize");
});
