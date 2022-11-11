/* main.js */

/* 메인배너 이미지 전환 */
$(function () {
  let bgArr = [
    "images/main-banner-1.jpg",
    "images/main-banner-2.jpg",
    "images/main-banner-3.jpg",
  ];
  /* 스크립트에서 경로를 불러올 때는 js파일 폴더나 css파일 폴더가 기준이 아닌, HTML문서 기준으로 찾는다.
  DOM 조작은 attribute(인라인속성)을 변경하는 것이기 때문 */

  let bg_img_num = 0;

  setInterval(function () {
    bg_img_num++;

    if (bg_img_num >= bgArr.length) {
      bg_img_num = 0;
    }
    $("#main-banner .container").css({
      "background-image": `url(${bgArr[bg_img_num]})`,
    });
  }, 5000);
});

/* 사이트맵 토글 */
$(function () {
  /* $("#main-header .btn-toggle").click(function () {
    $("#site-map-menu").css("height", "80vh");
  });

  $("#site-map-menu .btn-close").click(function () {
    $("#site-map-menu").css("height", "0px");
  }); */
  $("#main-header .btn-toggle").on("click", function () {
    $("#site-map-menu").toggleClass("show");
    $("#site-map-menu .depth2").removeClass("show");
  });

  $("#site-map-menu .btn-close").on("click", function () {
    $("#site-map-menu").removeClass("show");
  });
});

/* 모바일 2단메뉴 */
$(function () {
  $("#site-map-menu .depth1 > li > a").on("click", function (event) {
    event.preventDefault();
    // $("#site-map-menu .depth2").removeClass("show");
    $(this).next().toggleClass("show");
  });
});
