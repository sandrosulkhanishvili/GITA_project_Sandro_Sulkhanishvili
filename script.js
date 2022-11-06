$(document).ready(function () {
  $(".div-box").mouseenter(function () {
    $(this).css({
      transform: "scale(1.2)",
      "box-shadow": "10px 10px 5px lightblue",
      "z-index": "100",
    });
  });
  $(".div-box").mouseleave(function () {
    $(this).css({
      transform: "scale(1)",
      "box-shadow": "",
      "z-index": "0",
    });
  });

  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });

  let acc = document.getElementsByClassName("acc");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});
