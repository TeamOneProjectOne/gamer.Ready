$(document).ready(function () {


    var queryURL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added"
    var gameTitle = "";
    var rawgTitle = "";
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
    
    function youTube() {
        // var name = $("#searchInput").val().trim();
        var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bestgames&key=AIzaSyC3EShBj-IXE56i2Tck-VRlcw5O8kVukPo";

        $.ajax({
            url: youtubeURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            let items = response.items;
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                var videoResults = $("<div>").attr("id", "youtubeGame")
                var videoName = $("<h5>")
                videoName.text($(item.snippet.title));
                videoResults.prepend(videoName)
                var videoImage = $("<img>")
                videoImage.attr("src", $(item.snippet.thumbnails.medium.url));
                videoResults.prepend(videoImage);
                

                $("#videotest").prepend(videoResults);
            }
            console.log(videoResults);
        })

    }
    rawg();
    
    

    $("#searchButton").on("click", function () {
        event.preventDefault();
        var searchInputGame = $("#searchInput").val().trim();
        $("#test").empty();
        queryURL = "https://api.rawg.io/api/games?search=" + searchInputGame;
        console.log("because clicked: " + queryURL)
        rawg()
        
    });



    //take me to the game page
    $(document).on("click", ".thisDiv", function (event) {
        event.preventDefault();
        console.log("clicky-div")
        // gameTitle = $(this).prop("#rawgTitle");
        gameTitle = $(this).find("#rawgTitle").text()
        console.log("yeap", $(this).find("#rawgTitle").text())
        console.log("say what now? " + queryURL)
        console.log("this: ", this)
        console.log("game title: " + gameTitle)

        localStorage.setItem("rawgGamePage", gameTitle);
        $(location).attr('href', "gamePage.html")

        // var thisGame = $(this).attr("<a "
        // var thisGameName = $(this)
    });

    // $("#videos").on("click", function (event) {
    //     // event.preventDefault();

    // })

});