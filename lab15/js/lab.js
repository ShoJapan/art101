// index.js - purpose and description here
// Author: Sho Serrano
// Date: 06-01-2023

// Functions
$(document).ready(function() {
    // Function to get comic data
    function getComicData() {
        $.ajax({
            url: "https://xkcd.com/info.0.json",
            type: "GET",
            dataType: "json",
            success: function(data) {
                displayComicData(data);
                console.log(data); // Log comic data to the console
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        });
    }

    // Function to display comic data
    function displayComicData(comicData) {
        $('#comic-image').attr('src', comicData.img);
        $('#comic-title').text(comicData.title);
        $('#comic-year').text(comicData.year);
        $('#comic-container').css('border', '1px solid black'); // Add border to the container
    }

    // Call the function to get comic data
    getComicData();
});