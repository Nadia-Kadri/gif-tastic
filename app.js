let initialButtons = ["happy", "sad", "hungry", "hyper", "tired", "determined", "jealous", "strong"];

for (let i = 0; i < initialButtons.length; i++) {
    $("<button>").attr("class", "gif-button")
                 .text(initialButtons[i])
                 .appendTo("#gif-buttons")
}

$("#add-button").on("click", function(event) {
    event.preventDefault();
    addButton()
})

function addButton() {
    let userGif = $("#search-term").val().trim()

    if (userGif === "") {
        return false;
    }

    $("<button>").attr("class", "gif-button")
                 .text(userGif)
                 .appendTo("#gif-buttons")
}



// QFgJUbUNCHg590GuY69pniXKIERiCZUN

