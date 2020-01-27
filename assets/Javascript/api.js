$(document).ready(function () {

    
     var queryURL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added"
    var gameTitle = ""
    var rawgTitle = ""
     function rawg() {
       
        var gamesData = [];


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (let i = 0; i < response.results.length; i++) {
                var rawgResults = $('<div class="thisDiv">').attr("id", "rawgGames");
                var rawgImages = $("<img>").attr("data-imgRAWG", "bGround");
                rawgResults.append(rawgImages)
                var rawgRatings = $("<div>").attr("id", "rating");
                rawgResults.append(rawgRatings)
                var rawgTitle = $("<div>").attr("id", "rawgTitle")
                rawgResults.append(rawgTitle)
                rawgTitle.append(response.results[i].name);                
                rawgRatings.text("Rating: " + response.results[i].rating);
                rawgImages.attr("src", response.results[i].short_screenshots[0].image);
                $("#test").append(rawgResults);


            }
            
        })
    }
    // function twitch() {
    //     var name = $("#searchInput").val().trim();
    //     var queryURL = "https://api.twitch.tv/helix/videos?game_id=" + name;

    //     $.ajax({
    //         url: queryURL
    //         method: "GET",
    //         headers: {
    //             "Client-ID": "mf1yqwkv1gtvjwizwhg7vnlkcbhbvd"
    //         }
    //     }).then(function (response) {
    //         console.log(response);
            
    //     })

    // }
    
    function youTube() {
        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="
    //https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyC3EShBj-IXE56i2Tck-VRlcw5O8kVukPo
        var apiKey = "AIzaSyC3EShBj-IXE56i2Tck-VRlcw5O8kVukPo"
    }
    rawg();
    //Need to either decide if we want the YouTube API on the main RAWG page or a separate display results page

    
    $("#searchButton").on("click", function () {
        event.preventDefault();
        var searchInputGame = $("#searchInput").val().trim();
        $("#test").empty();
        queryURL = "https://api.rawg.io/api/games?search=" + searchInputGame;
        console.log("because clicked: " + queryURL)
        rawg()
        // twitch();
    });



     //take me to the game page
     $(document).on("click", ".thisDiv", function (event) {
        event.preventDefault();
        console.log("clicky-div")
        // gameTitle = this.attr($("#rawgTitle").text());
        // $("#gameTitle").text(gameTitle);
        console.log("gameTitle: " + gameTitle)
        console.log("this: " + this)
        $(location).attr('href', "gamePage.html")

        // var thisGame = $(this).attr("<a "
        // var thisGameName = $(this)
    });


});