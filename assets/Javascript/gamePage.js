$(document).ready(function () {
    $("#gameTitleDisplay").text(localStorage.getItem("rawgGamePage"));
    var thisGame = localStorage.getItem("rawgGamePage");
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
    let gameID = $()
    // function rawg() {

    //     // var gamesData = [];


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var rawgResults = $('<div class="thisGame">').attr("id", "thisGames");
            var rawgImages = $("<img>").attr("data-imgThisGame", "bGround");
            rawgImages.attr("src", response.results[0].background_image)
            $("#imageColumn").append(rawgImages);
            var rawgRatings = $('<div id="thisGameRating"></div>');
            rawgRatings.text("Rating: " + response.results[0].rating);
            // var rawgPlatforms = $('<div><ul id="platforms"></ul></div>');
            // rawgPlatforms.text("Platforms: " )
            // for (i = 0; i < response.results[0].platforms.length; i++) {

            //     var platformItems = $('<li>' + response.results[0].platforms[i].platform.name + '</li>');
            //     $("#platforms").append(platformItems);
            //     console.log("platforms: ", platformItems)
            // }
            var releaseDate = $('<div id="releaseDate"></div>');
            releaseDate.text("Release Date: " + response.resluts[0].released)

            

            $("#statColumn").append(rawgRatings, releaseDate);


        });
    

        function youTube() {
            var name = key
            var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + name + "&key=AIzaSyC3EShBj-IXE56i2Tck-VRlcw5O8kVukPo";
    
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
        youTube();
});

