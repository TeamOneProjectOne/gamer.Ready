
$(document).ready(function () {

    
    
    function rawg() {
        var queryURL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added"
        var gamesData = [];


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (let i = 0; i < response.results.length; i++) {
                var rawgResults = $('<div class="thisDiv">').attr("id", "2019games");
                var rawgImages = $("<img>").attr("data-imgRAWG", "bGround");
                rawgResults.append(rawgImages)
                var rawgRatings = $("<div>").attr("id", "rating");
                rawgResults.append(rawgRatings)
                rawgResults.append(response.results[i].name);
                rawgRatings.text("Rating: " + response.results[i].rating);
                rawgImages.attr("src", response.results[i].short_screenshots[0].image);
                $("#test").prepend(rawgResults);




            }


        })
    }
    function twitch() {
        var queryURL = "https://api.twitch.tv/helix/streams";

        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                "Client-ID": "mf1yqwkv1gtvjwizwhg7vnlkcbhbvd"
            }
        }).then(function (response) {
            console.log(response);
            
        })

    }
    rawg();
    twitch();
    $("#searchButton").on("click", function () {
        event.preventDefault();
        var searchInputGame = $("#searchInput").val().trim();
        $("#test").empty();
        var queryURL = "https://api.rawg.io/api/games?search=" + searchInputGame;
        console.log("because clicked: " + queryURL)
        
    });


    $(document).on("click", ".thisDiv", function (event) {
        event.preventDefault();
        console.log("clicky-div")
        $(location).attr('href', "gamePage.html")

        // var thisGame = $(this).attr("<a "
        // var thisGameName = $(this)
    });

});
