$(document).ready(function () {
    var thisVideo = localStorage.getItem("youtubeLink")
    // var myVideos = JSON.parse(localStorage.getItem("rawgGamePage")) || [];
    var myVideos = JSON.parse(localStorage.getItem("myVideos")) || [];
    if (!myVideos.includes(thisVideo)) {
        myVideos.push(thisVideo);
    }
    localStorage.setItem("myVideos", JSON.stringify(myVideos));


    // for loop length of my games
    // pull mygames[i]
    // query mygames[i]
    // append query to html


    for (let i = 0; i < myVideos.length; i++) {
        let saveVideos = myVideos[i];


        let youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + saveVideos + "&key=AIzaSyCPy54AlgJ3V_7vhdgJwHdRVkPHm06fHU0";

        $.ajax({
            url: youtubeURL,
            method: "GET"
        }).then(function (response) {
            console.log("EweTewb response: ", response);
            let items = response.items;
            console.log("video searches:", items);
            for (let i = 0; i < items.length; i++) {
                let videoDiv = $('<div id="videoVideo">')
                let EweTewb = items[0].id.videoId
                let EweTewbLink = "https://www.youtube.com/video/" + EweTewb;
                // console.log("items: ", items[i].snippet.title);
                let videoImage = $("<img>").attr("src", items[0].snippet.thumbnails.medium.url)
                videoDiv.append(videoImage, $("<br>"))
                let videoName = $('<a href="' + EweTewbLink + '" target="_blank">' + items[0].snippet.title + '</a>')
                videoDiv.append(videoName)
                // console.log("THIS THING HERE IS:", videoName);
                // console.log("PICTURE THIS:", videoImage)
                $("#videotest").append(videoDiv)
            }

        })

    }



    //take me to the game page
    $(document).on("click", "#videoVideo", function (event) {
        event.preventDefault();
        console.log("clicky-vids")
        // eweTewbDivLink = $(this).find("#videoName").text()
        eweTewbDivLink = $(this).find("a").attr("href")
        console.log("ewe vids: ", $(this).find("a").attr("href"))
        console.log("ewe var: ", eweTewbDivLink)
        $(location).attr('href', eweTewbDivLink)
        localStorage.setItem("youtubeLink", eweTewbDivLink);

    })
});
