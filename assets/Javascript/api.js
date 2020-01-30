$(document).ready(function () {


    var queryURL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added"
    var gameTitle = "";
    var rawgTitle = "";
    var EweTewb = "";
    var EweTewbLink = "";
    var videoName = "";

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
                var rawgTitle = $("<div>").attr("id", "rawgTitle")
                rawgResults.append(rawgTitle)
                var rawgRatings = $("<div>").attr("id", "rating");
                rawgResults.append(rawgRatings)
                rawgTitle.append(response.results[i].name);
                rawgRatings.text("Rating: " + response.results[i].rating);
                rawgImages.attr("src", response.results[i].short_screenshots[0].image);
                $("#test").append(rawgResults);


            }

        })
    }
    var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=bestvideogames&key=AIzaSyCPy54AlgJ3V_7vhdgJwHdRVkPHm06fHU0";
    
    let videoGames = function youTube() {
        
        $.ajax({
            url: youtubeURL,
            method: "GET"
        }).then(function (response) {
            console.log("EweTewb response: ", response);
            let items = response.items;
            console.log("video searches:", items);
            for (let i = 0; i < items.length; i++) {
                let videoDiv = $('<div id="videoVideo">')
                let EweTewb = items[i].id.videoId
                let EweTewbLink = "https://www.youtube.com/video/" + EweTewb;
                // console.log("items: ", items[i].snippet.title);
                let videoImage = $("<img>").attr("src", items[i].snippet.thumbnails.medium.url)
                videoDiv.append(videoImage, $("<br>"))
                let videoName = $('<a href="' + EweTewbLink + '">' + items[i].snippet.title + '</a>')
                videoDiv.append(videoName)
                // console.log("THIS THING HERE IS:", videoName);
                // console.log("PICTURE THIS:", videoImage)
                $("#videotest").append(videoDiv)
               
    
    
            }
    
        })
    
    }
    rawg();
    videoGames();
    

    $("#searchButton").on("click", function () {
        event.preventDefault();
        var searchInputGame = $("#searchInput").val().trim();
        $("#test").empty();
        $("#videotest").empty();
        queryURL = "https://api.rawg.io/api/games?search=" + searchInputGame;
        console.log("because clicked: " + queryURL)
        rawg()
        
    });

    $("#videosButton").on("click", function(event){
        event.preventDefault();
        var searchInputGame = $("#searchInput").val().trim();
        $("#test").empty();
        $("#videotest").empty();
        youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=" + searchInputGame + "&key=AIzaSyCPy54AlgJ3V_7vhdgJwHdRVkPHm06fHU0";
        videoGames();
        
    })



    //take me to the game page
    $(document).on("click", ".thisDiv", function (event) {
        event.preventDefault();
        console.log("clicky-div")
        gameTitle = $(this).find("#rawgTitle").text()
        console.log("yeap", $(this).find("#rawgTitle").text())
        console.log("say what now? " + queryURL)
        console.log("this: ", this)
        console.log("game title: " + gameTitle)

        localStorage.setItem("rawgGamePage", gameTitle);
        $(location).attr('href', "gamePage.html")

    });
    //take me to EweTewb
    $(document).on("click", "#videoVideo", function(event) {
        event.preventDefault();
        console.log("clicky-vids")
        // eweTewbDivLink = $(this).find("#videoName").text()
        eweTewbDivLink = $(this).find("a").attr("href")
        console.log("ewe vids: ", $(this).find("a").attr("href"))
        console.log("ewe var: ",  eweTewbDivLink)
        $(location).attr('href', eweTewbDivLink)

    })
   


});