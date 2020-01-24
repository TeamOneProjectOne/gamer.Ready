// var apiKEY = "da8bc7eb09028fc87c2de72e2cc90027"
var queryURL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added"
var gamesData = [];



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    for (let i = 0; i < response.results.length; i++) {
        var rawgResults = $("<div>").attr("id", "2019games");
        var rawgImages = $("<img>").attr("data-imgRAWG", "bGround");
        rawgResults.text(response.results[i].name);
        rawgImages.attr("src", response.results[i].short_screenshots[0].image);
        $("#test").prepend(rawgResults, rawgImages);
    }
    

})

