


$(document).ready(function () {

    function rawg() {
        var queryURL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added"
        var gamesData = [];

        // }

        // 

        // function twitch(){
        //     var queryURL = "https://api.twitch.tv/helix/?client-id=mf1yqwkv1gtvjwizwhg7vnlkcbhbvd"
        // }

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
    function twitch(){
        var apiKEY = "mf1yqwkv1gtvjwizwhg7vnlkcbhbvd"
        var queryURL = "https://api.twitch.tv/helix/streams?game_id=33214?Client-ID=" + apiKEY;
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response){
            console.log(response);
        })

    }
        rawg();
        twitch();

        $("#searchButton").on("click", function (event) {
            event.preventDefault();
            var searchInputGame = $("#searchInput").val().trim();
            $("#test").empty();
            var queryUrl = "https://api.rawg.io/api/" + searchInputGame;
            console.log("because clicked: " + newQuery)
        });


        $(".thisDiv").on("click", function (event) {
            // event.preventDefault();
            console.log("clicky-div")
            // var thisGame = $(this).attr("<a ")
        });
    });
