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
    
}
displayCards()