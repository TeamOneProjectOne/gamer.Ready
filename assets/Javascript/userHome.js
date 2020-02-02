$(document).ready(function () {

  var myGames = JSON.parse(localStorage.getItem("myGames")) || [];

  // for loop length of my games
  // pull mygames[i]
  // query mygames[i]
  // append query to html


  for (let i = 0; i < myGames.length; i++) {
    let savedGames = myGames[i];
   queryURL = "https://api.rawg.io/api/games?search=" + savedGames;



    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      var savedResults = $('<div class="thisDiv">').attr("id", "savedGames");
      var savedImages = $("<img>").attr("data-imgsaved", "bGround");
      savedResults.append(savedImages)
      var savedTitle = $("<div>").attr("id", "savedTitle")
      savedResults.append(savedTitle)
      var savedRatings = $("<div>").attr("id", "rating");
      savedResults.append(savedRatings)
      savedTitle.append(response.results[0].name);
      savedRatings.text("Rating: " + response.results[0].rating);
      savedImages.attr("src", response.results[0].short_screenshots[0].image);
      $("#test").append(savedResults);


    })

  }



  //take me to the game page
  $(document).on("click", ".thisDiv", function (event) {
    event.preventDefault();
    console.log("clicky-div")
    gameTitle = $(this).find("#savedTitle").text()
    localStorage.setItem("rawgGamePage", gameTitle)
    console.log("yeap", $(this).find("#savedTitle").text())
    console.log("say what now? " + queryURL)
    console.log("this: ", this)
    console.log("game title: " + gameTitle)

    $(location).attr('href', "gamePage.html")

  });
});
