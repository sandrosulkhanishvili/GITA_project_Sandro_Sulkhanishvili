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
  // $(".see-more-button").click(function () {
  //   let countryID = $(this).attr("id");
  //   $.getJSON("data.json", function (data) {
  //     var countries = "";
  //     var countriesData = [];
  //     countriesData = data.countries;
  //     console.log(data, "data");
  //     var findCountry = countriesData.filter((curr) => curr.id === countryID);
  //     window.location.pathname = "/countryPage.html";
  //     $.each(data.countries, function (key, value) {
  //       countries += "<div>";
  //       countries += "<p>" + value.name + "</p>";
  //       countries += "<p>" + value.description + "</p>";
  //       countries += "<p>" + value.duration + "</p>";
  //       countries += "<p>" + value.price + "</p>";
  //       countries += "</div>";
  //     });
  //     console.log(countryID);
  //     $("#countries").append(countries);
  //   });
  // }); I was tring do to like this but html did allow me to do dynamic routing

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
