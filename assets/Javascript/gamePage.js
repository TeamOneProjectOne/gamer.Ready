$(document).ready(function () {
    $("#gameTitleDisplay").text(localStorage.getItem("rawgGamePage"));
    var thisGame = localStorage.getItem("rawgGamePage");
    var myGames = JSON.parse(localStorage.getItem("myGames")) || [];
    if (!myGames.includes(thisGame)) {
        myGames.push(thisGame);
    }
    localStorage.setItem("myGames", JSON.stringify(myGames));
    var key = "";

    function convertVariable(text) {
        var key = text.replace(" ", "%26");
        console.log("key: ", key)
        return key;
    }

    key = convertVariable(thisGame);
    console.log(convertVariable(thisGame))
    console.log(thisGame)

    thisGame = convertVariable(thisGame);
    //results[i].platforms[i].platform.name
    queryURL = "https://api.rawg.io/api/games?search=" + key;
    console.log("not this sh*t again... ", queryURL)

    // function rawg() {

    //     // var gamesData = [];


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("response: ", response);
        var rawgResults = $('<div class="thisGame">').attr("id", "thisGames");
        var rawgImages = $("<img>").attr("data-imgThisGame", "bGround");
        rawgImages.attr("src", response.results[0].background_image)
        $("#imageColumn").append(rawgImages);
        var rawgRatings = $('<div id="thisGameRating"></div><br>');
        rawgRatings.text("Rating: " + response.results[0].rating);
        var released = response.results[0].released;
        var releaseDate = $('<div id="releaseDate"></div><br>');
        releaseDate.text("Release Date: " + released);
        console.log("released: ", releaseDate)
        var rawgPlatforms = $('<div>Platforms: <ul id="platforms"></ul></div>');
        rawgPlatforms.append(platformItems)
        $("#statColumn").append(rawgRatings, releaseDate, rawgPlatforms);


        for (i = 0; i < response.results[0].platforms.length; i++) {

            var platformItems = $('<li>' + response.results[0].platforms[i].platform.name + '</li>');
            $("#platforms").append(platformItems);
            console.log("platforms: ", platformItems[i])
        }

        var descId = response.results[0].id



        function description() {
            var descURL = "https://api.rawg.io/api/games/" + descId;

            $.ajax({
                url: descURL,
                method: "GET"
            }).then(function (response) {
                let gameDesc = response.description
                console.log(gameDesc);
                $("#descColumn").append(gameDesc);
            })


        }
        description();
    })
});


