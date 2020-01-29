// $(document).ready(function () {
//     var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=videogames&key=AIzaSyC3EShBj-IXE56i2Tck-VRlcw5O8kVukPo";

//     let videoGames = function youTube() {
        
//         $.ajax({
//             url: youtubeURL,
//             method: "GET"
//         }).then(function (response) {
//             console.log("EweTewb response: ", response);
//             let items = response.items;
//             console.log("video searches:", items);
//             for (let i = 0; i < items.length; i++) {
//                 let videoDiv = $('<div id="videoVideo">')
//                 let EweTewb = items[i].id.videoId
//                 let EweTewbLink = "https://www.youtube.com/video/" + EweTewb;
//                 // console.log("items: ", items[i].snippet.title);
//                 let videoImage = $("<img>").attr("src", items[i].snippet.thumbnails.medium.url)
//                 videoDiv.append(videoImage, $("<br>"))
//                 let videoName = $('<a href="' + EweTewbLink + '">' + items[i].snippet.title + '</a>')
//                 videoDiv.append(videoName)
//                 // console.log("THIS THING HERE IS:", videoName);
//                 // console.log("PICTURE THIS:", videoImage)
//                 $("#videotest").append(videoDiv)


//             }

//         })

//     }
//     $("#videosButton").on("click", function (event) {
//         event.preventDefault();
//         videoGames();

//     })
//     $("#searchButton").on("click", function (event) {
//         event.preventDefault();
//         rawg();

//     })
// });
