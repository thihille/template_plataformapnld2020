"use strict";

$.fn.menumaker = function (n) {
  var multiTg, resizeFix;
  var s = $(this),
      i = $.extend({ title: "Menu", format: "dropdown", sticky: !1 }, n);return this.each(function () {
    return s.prepend('<div id="menu-button">' + i.title + "</div>"), $(this).find("#menu-button").on("click", function () {
      $(this).toggleClass("menu-opened");var n = $(this).next("ul");n.hasClass("open") ? n.hide().removeClass("open") : (n.show().addClass("open"), "dropdown" === i.format && n.find("ul").show());
    }), s.find("li ul").parent().addClass("has-sub"), multiTg = function multiTg() {
      s.find(".has-sub").prepend('<span class="submenu-button"></span>'), s.find(".submenu-button").on("click", function () {
        $(this).toggleClass("submenu-opened"), $(this).siblings("ul").hasClass("open") ? $(this).siblings("ul").removeClass("open").hide() : $(this).siblings("ul").addClass("open").show();
      });
    }, "multitoggle" === i.format ? multiTg() : s.addClass("dropdown"), !0 === i.sticky && s.css("position", "fixed"), resizeFix = function resizeFix() {
      $(window).width() > 890 && s.find("ul").show(), $(window).width() <= 890 && s.find("ul").hide().removeClass("open");
    }, resizeFix(), $(window).on("resize", resizeFix);
  });
}, $("#menu_principal").menumaker({ title: "Menu", format: "multitoggle" });