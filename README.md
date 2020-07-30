# Thank you for looking at gamer.Ready  


This app demonstrates use of ajax-constructed api calls dynamically generated by user input,local storage usage, as well as clearly branded, rich ux/ui.

relevant links:

    Deployed app:
    https://tinyurl.com/gamer-ready

    Code repo:
    https://tinyurl.com/gamer-ready-repo






1. Purpose for this app:
	Gamer.Ready provides a fun UX/UI which takes the repetition out of searching for release dates, let’s play and tutorial videos, and market data for your favorite games.


2. How the app is organized:
Each page has its own html file in the gamer.ready folder.
      B. 	Many of the pages have an accompanying file containing the logic, each contained in the folder labeled “Javascript:
	I. api.js houses ajax-constructed api calls to RAWG and YouTube.  Upon landing, the two apis will automatically populate two lists: a list of top 10 rated games with release dates between 01/01/2019 and 12/31/2019, and a list of the first 10 YouTube videos resulting from searching the phrase “best video games.”  The user can enter text in the search field which will create new calls to both apis simultaneously.
	II.  The register.js file, which is imported by the register.html file, contains code which handles user input to save data in local storage, allowing for persistence of their future search results.
	III. If corresponding data is present in local storage, it will be automatically retrieved by the code in userHome.js and displayed by myGames.html.  userHome.js will loop through locally stored strings and then concatenate the appropriate api calls. may navigate to their personal page by clicking the “Games” button in the nav bar.

3.  Instructions for using this app:
Download or clone the repo from the link above or in section 5.
Open the file called index.html in your code editor.
Start the live server using the methods employed by your code editor.
You shouldn’t need to run any npm installations.
You may also simply use the link to the deployed site above or in section 5.
	

4. Link to a video of the app in use is coming soon!

5. Link to the deployed version of the app:
	https://github.com/Jeff-Ashear/-liri-node-app.git
 ...and a link to the repo:
	https://github.com/Jeff-Ashear/-liri-node-app.git



6. Technologies used in creating this app:
GitHub is used to store the repo, as well as host the deployed version.
Apis from RAWG and YouTube were used to gather content.
Ajax was used to construct the api calls.
Jquery was used to handle user input to:
Store their data in local storage.
Catch their input into search fields and then use this input to construct new api calls
Bootstrap used to make the page responsive and for most styling.
CSS used for some finer styling details:
Button customization
Hover effects
Keyframes animations.
	


7. This app and its original concept were developed collaboratively by Destiny Clarke, Justin Tucker, Braxton Thomas, and Jeff Ashear.
	Destiny Clarke developed the api calls for both YouTube and RAWG, did much of the styling, responsiveness and the animations.
	Justin Tucker created the flow, navigation and wrote all copy appearing in the app, as well as assisting with jQuery and debugging.
	Braxton Thomas built the nav bar and helped out with styling and layout.
	Jeff Ashear helped with the RAWG api, wrote the ajax and jQuery, and did much of the styling and branding including UI and textures, and some help with the animations.

        