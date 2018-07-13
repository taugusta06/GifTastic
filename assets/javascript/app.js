var technology = []

$("#confirmBtn").on("click", function(){
    event.preventDefault();
    var topicIdea = $("#topicInput").val().trim();
    var newTopic = $("<p>");
    newTopic.append(" ").text(topicIdea);
    var topicBtn = $("<button>");
    topicBtn.attr("data-topic", topicIdea);
    topicBtn.addClass("btn");
    topicBtn.addClass("btn-secondary");


    newTopic = newTopic.prepend(topicBtn);
    $("#BtnCont").append(topicBtn);
    console.log(topicBtn);
    console.log(topicIdea);
    console.log(newTopic);





})


$("button").on("click", function () {
    // Get and store the data-topic property value from the button
    var techWord = $(this).attr("data-topic");

    // Constructing a queryURL using the techWord name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        techWord + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);

            console.log(response);
            // store the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through results
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                    var techWordDiv = $("<div>");
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var techWordImage = $("<img>");
                    techWordImage.attr("src", results[i].images.fixed_height.url);
                    techWordDiv.append(p);
                    techWordDiv.append(techWordImage);
                    $("#gifs-appear-here").prepend(techWordDiv);
                }
            }
        });
});