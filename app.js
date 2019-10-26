let initialButtons = ["happy", "sad", "hungry", "hyper", "tired", "determined", "jealous", "strong"];


for (let i = 0; i < initialButtons.length; i++) {
    $("<button>").attr("class", "gif-button")
                 .attr("data-gif", initialButtons[i])
                 .text(initialButtons[i])
                 .appendTo("#gif-buttons")
};


$("#add-button").on("click", function(event) {
    event.preventDefault();
    addButton()
});


function addButton() {
    let userGif = $("#search-term").val().trim()

    if (userGif === "") {
        return false;
    }

    $("<button>").attr("class", "gif-button")
                 .attr("data-gif", userGif)
                 .text(userGif)
                 .appendTo("#gif-buttons")
};


$(document).on("click", ".gif-button", function() {
    $("#display-gif").empty()

    let gif = $(this).attr("data-gif");

    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=QFgJUbUNCHg590GuY69pniXKIERiCZUN&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
      console.log(response.data);
    
      for (let i = 0; i < response.data.length; i++) {
      let animate = response.data[i].images.downsized.url
      let still = response.data[i].images.downsized_still.url
      console.log(animate)
      console.log(still)

      let theGif = $("<img>")
                  .addClass("mood-gif")
                  .attr("src", animate)
                  .attr("data-state", "animate")
                  .attr("data-animate", animate)                            
                  .attr("data-still", still)      
                  
      theGif.appendTo("#display-gif")
      }
    });
});


$(document).on("click", ".mood-gif", function() {
    let state = $(this).attr("data-state");

    if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    } else {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
});






