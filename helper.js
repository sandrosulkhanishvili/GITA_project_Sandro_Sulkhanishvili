function getData(id) {
  $.getJSON("../data.json", function (data) {
    var countries = "";
    var countriesData = [];
    countriesData = data.countries;

    var findCountry = countriesData.filter((curr) => curr.id === id);
    console.log(findCountry);
    countries += "<div class='countryWrapper'>";
    countries += "<img src =" + findCountry[0].img + ">";

    countries += "<div class = 'countryTextWrapper'>";
    countries +=
      "<h1> <strong>Country:</strong> " + findCountry[0].name + "</h1>";
    countries +=
      "<p> <strong>Info:</strong> " + findCountry[0].description + "</p>";
    countries +=
      "<p> <strong>Duration:</strong> " + findCountry[0].duration + "</p>";
    countries += "<p> <strong>Price:</strong> " + findCountry[0].cost + "</p>";
    countries += "</div>";
    countries += "</div>";

    $("#countries").append(countries);
  });
}
