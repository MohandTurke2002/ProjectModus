// Start NAV Action
$(".navbar-toggler").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".collapse").css("height", "0px");
  } else {
    $(".collapse").css("height", "358px");
    $(this).addClass("active");
  }
});

$(".nav-link").click(function (e) {
  e.preventDefault();
  $(this)
    .addClass("active")
    .parent()
    .siblings()
    .find(".nav-link")
    .removeClass("active");
  $("html, body").animate(
    {
      scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
    },
    1000
  );
});

$(window).scroll(function () {
  $("div").each(function () {
    if ($(window).scrollTop() > $(this).offset().top) {
      let id = $(this).attr("id");
      $('.nav-link[data-scroll="' + id + '"]')
        .addClass("active")
        .parent()
        .siblings()
        .find(".nav-link")
        .removeClass("active");
    }
  });
});

$(".btn").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".form-control").css({
      width: "0px",
    });
  } else {
    $(".form-control").css({
      width: "200px",
    });
    $(this).addClass("active");
  }
});
// End NAV Action

// Start WORKS Action
$(".catogeri .all").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".gallery .app").css({
    width: "30%",
    height: "400px",
  });
  $(".gallery .prog").css({
    width: "100%",
    height: "200px",
  });
  $(".gallery .web").css({
    width: "100%",
    height: "200px",
  });
  $(".gallery .graph").css({
    width: "40%",
    height: "200px",
  });
  $(".gallery .graph2").css({
    width: "60%",
    height: "200px",
  });
  $(".gallery .photo").css({
    width: "100%",
    height: "200px",
  });
  $(".gallery .crow").css({
    width: "20%",
    height: "400px",
  });
});
$(".catogeri .photo").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".gallery .app").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .prog").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .web").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .graph").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .graph2").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .photo").css({
    width: "100%",
    height: "200px",
  });
  $(".gallery .crow").css({
    width: "0%",
    height: "0px",
  });
});
$(".catogeri .graph").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".gallery .app").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .prog").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .web").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .graph").css({
    width: "40%",
    height: "200px",
  });
  $(".gallery .graph2").css({
    width: "60%",
    height: "200px",
  });
  $(".gallery .photo").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .crow").css({
    width: "0%",
    height: "0px",
  });
});
$(".catogeri .app").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".gallery .app").css({
    width: "30%",
    height: "400px",
  });
  $(".gallery .prog").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .web").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .graph").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .graph2").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .photo").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .crow").css({
    width: "20%",
    height: "400px",
  });
});
$(".catogeri .prog").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".gallery .app").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .prog").css({
    width: "100%",
    height: "200px",
  });
  $(".gallery .web").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .graph").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .graph2").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .photo").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .crow").css({
    width: "20%",
    height: "400px",
  });
});
$(".catogeri .web").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".gallery .app").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .prog").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .web").css({
    width: "100%",
    height: "200px",
  });
  $(".gallery .graph").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .graph2").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .photo").css({
    width: "0%",
    height: "0px",
  });
  $(".gallery .crow").css({
    width: "20%",
    height: "400px",
  });
});

let num = parseInt($(".app .addlike span").text());
$(".app .addlike button").on("click", function () {
  if ($(".app .addlike button [type=add]").hasClass("added")) {
    $(".app .addlike span").text(--num);
    $(".app .addlike button [type=add]").removeClass("added");
  } else {
    $(".app .addlike span").text(++num);
    $(".app .addlike button [type=add]").addClass("added");
  }
});
let num2 = parseInt($(".prog .addlike span").text());
$(".prog .addlike button").on("click", function () {
  if ($(".prog .addlike button [type=add]").hasClass("added")) {
    $(".prog .addlike span").text(--num2);
    $(".prog .addlike button [type=add]").removeClass("added");
  } else {
    $(".prog .addlike span").text(++num2);
    $(".prog .addlike button [type=add]").addClass("added");
  }
});
let num3 = parseInt($(".web .addlike span").text());
$(".web .addlike button").on("click", function () {
  if ($(".web .addlike button [type=add]").hasClass("added")) {
    $(".web .addlike span").text(--num3);
    $(".web .addlike button [type=add]").removeClass("added");
  } else {
    $(".web .addlike span").text(++num3);
    $(".web .addlike button [type=add]").addClass("added");
  }
});
let num4 = parseInt($(".graph .addlike span").text());
$(".graph .addlike button").on("click", function () {
  if ($(".graph .addlike button [type=add]").hasClass("added")) {
    $(".graph .addlike span").text(--num4);
    $(".graph .addlike button [type=add]").removeClass("added");
  } else {
    $(".graph .addlike span").text(++num4);
    $(".graph .addlike button [type=add]").addClass("added");
  }
});
let num5 = parseInt($(".graph2 .addlike span").text());
$(".graph2 .addlike button").on("click", function () {
  if ($(".graph2 .addlike button [type=add]").hasClass("added")) {
    $(".graph2 .addlike span").text(--num5);
    $(".graph2 .addlike button [type=add]").removeClass("added");
  } else {
    $(".graph2 .addlike span").text(++num5);
    $(".graph2 .addlike button [type=add]").addClass("added");
  }
});
let num6 = parseInt($(".photo .addlike span").text());
$(".photo .addlike button").on("click", function () {
  if ($(".photo .addlike button [type=add]").hasClass("added")) {
    $(".photo .addlike span").text(--num6);
    $(".photo .addlike button [type=add]").removeClass("added");
  } else {
    $(".photo .addlike span").text(++num6);
    $(".photo .addlike button [type=add]").addClass("added");
  }
});
// Start WORKS Action
