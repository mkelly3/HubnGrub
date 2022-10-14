var recentSearches= JSON.parse(localStorage.getItem("savedCardStringify"));
console.log(recentSearches)
var mainEl = document.querySelector(".main");

function displayCards () {
    if (!recentSearches) {
    var noSearch;
    noSearch = document.createElement("h3");
    noSearch.textContent= ("You have no recent search history!");
    mainEl.appendChild(noSearch);
    }
    for (var i=0; i<recentSearches.artists.length; i++) {
        var savedDiv = document.createElement("div");
        var Meal = document.createElement("h2");
        var song = document.createElement("h3");
        var artist = document.createElement("h3");
        savedDiv.appendChild(Meal);
        savedDiv.appendChild(song);
        savedDiv.appendChild(artist);
        Meal.textContent = recentSearches.titleRecipe[i];
        song.textContent = recentSearches.songTitle[i];
        artist.textContent = recentSearches.artists[i];
        mainEl.appendChild(savedDiv);
    }
}
displayCards()