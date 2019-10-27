# gif-tastic

# What the project does
Giphy is a front end app that uses the GIPHY API to make a web page that displays gifs of the user's choice. Inital buttons are dynamically created and appended to the page using jQuery. User's can create their own button by entering a word in the form on the page and clicking submit. The submit button has an on click event handler that listens for when the button is clicked. Once clicked, user input is captured using the .val() method.

The name of each button is stored in attribute data-gif. This attribute is used to search the GIPHY API via an ajax call in which 10 gifs with their ratings are returned. The gifs are appended to the page and can be animated and paused by clicking on them. Users can add more gifs to the page by clicking on other gif buttons; this will add an additional 10 gifs to the page, not overwrite the existing gifs. 

# Who maintains and contributes to the project
I am the sole contributer to this project.