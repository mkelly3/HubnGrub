var homeCardEl = document.querySelector(".homeCard");
var optionsEl = document.querySelector(".option");
var proteinElementEl = document.querySelector(".proteinChoice");
var musicEl = document.querySelector(".musicChoice");
var veggieEl = document.querySelector(".vegetableSelection");
var results1El = document.querySelector(".food1");
var results2El = document.querySelector(".food2");
var saveBtn = document.querySelector(".saveBtn");
var titleRecipe = [];
var artists = [];
var songTitle = [];
function onStartButton() {
  $(".startBtn").click(function () {
    homeCardEl.setAttribute("data-style", "hide");
    optionsEl.removeAttribute("data-style", "hide");
  });
}
onStartButton();
function getRecipes(ingrident1, ingrident2) {
  console.log(ingrident1, ingrident2);
  fetch(
    "https://api.spoonacular.com/recipes/findByIngredients?apiKey=929b3b7b8bef46ec82a39bfd9c299472&ingredients=" +
      ingrident1 +
      ",+" +
      ingrident2
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      for (var i = 0; i < 8; i++) {
        titleRecipe[i] = response[i].title;
      }
      titleRecipe = titleRecipe.filter((item) => item);
      for (i = 0; i < titleRecipe.length; i++) {
        $("#recipeName" + i).text(titleRecipe[i]);
      }
      var recipeImg = [];
      for (var i = 0; i < 8; i++) {
        recipeImg[i] = response[i].image;
      }
      recipeImg = recipeImg.filter((item) => item);
      for (i = 0; i < recipeImg.length; i++) {
        $("#recipeImg" + i).attr({ src: recipeImg[i], alt: "Food Pic" });
      }
    });
}

var musicResultEl = document.querySelector(".musicDisplay");
var songTitleEl = document.querySelector("#artist");

function getMusic(music) {
  //search for an artist based on genre
  fetch(
    "https://itunes.apple.com/search?entity=song&attribute=genreIndex&term=" +
      music +
      "&limit=25"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      var musicDiv = document.createElement("div");
      var artistTitle = document.createElement("h3");
      var song = document.createElement("p");
      var songUrl = document.createElement("a");

      var link = document.createTextNode("This is link");
      songUrl.append(link);
      songUrl.title = "This is Link";

      for (var i = 0; i < 8; i++) {
        artists[i] = response.results[i].artistName;
      }
      for (var i = 0; i < artists.length; i++) {
        $("#artistName" + i).text(artists[i]);
      }

      for (var i = 0; i < 8; i++) {
        songTitle[i] = response.results[i].trackName;
      }
      for (var i = 0; i < songTitle.length; i++) {
        $("#songTitle" + i).text(songTitle[i]);
      }

      console.log(songTitle);

      console.log(song);
      var songLink = [];
      for (var i = 0; i < 8; i++) {
        songLink[i] = response.results[i].trackViewUrl;
      }
      for (var i = 0; i < songLink.length; i++) {
        $("#songLink" + i).attr("href", songLink[i]);
      }

      for (var i = 0; i < songLink; i++) {
        songUrl.href = songLink;
      }

      console.log(songLink);
      // musicDiv.appendChild(songUrl);
      // musicDiv.appendChild(artistTitle);
      // musicDiv.appendChild(song);
      // musicResultEl.appendChild(musicDiv);
      // musicResultEl.removeAttribute("data-style");
    })
    .catch((err) => console.error(err));
}

// function getMusic(music){
//       //search for an artisit based on genre
//       fetch("https://itunes.apple.com/search?entity=song&attribute=genreIndex&term="+music+"&limit=25")

//       .then(function (response) {
//             return response.json();
//         })

//       .then(function (response) {
//             console.log(response)
//             var artisits = []

//             for(var i=0; i<25; i++){
//                   artisits[i] = response.results[i].artistName;
//             }
//             //console.log(artisits);

//             // artisits = artisits.filter(item => item);

//             // for(var i=0; i<artisits.length; i++){
//             //       $('.name').text(artisits[i])
//             // }

//             //document.location.href ="recipe.html";

//             var songTitle = [];
//             for(var i=0; i<25; i++){
//                   songTitle[i] = response.results[i].trackName;
//             }
//             console.log(songTitle);

//             var songLink = [];
//             for(var i=0; i<25; i++){
//                   songLink[i] = response.results[i].trackViewUrl;
//             }
//             console.log(songLink);

//       })

//       .catch(err => console.error(err));

// }

function onSearchButton() {
  $(".searchBtn").click(function (event) {
    event.preventDefault();
    if (
      proteinElementEl.selectedIndex === 0 ||
      veggieEl.selectedIndex === 0 ||
      musicEl.selectedIndex === 0
    ) {
      return;
    }
    var protein = proteinElementEl.options[proteinElementEl.selectedIndex].text;
    console.log(protein);
    var veggieChoice = veggieEl.options[veggieEl.selectedIndex].text;
    console.log(veggieChoice);
    var musicChoice = musicEl.options[musicEl.selectedIndex].text;
    console.log(musicChoice);
    getRecipes(protein, veggieChoice);
    getMusic(musicChoice);
    $(".recipeResults").removeAttr("data-style", "hide");
  });
}
onSearchButton();

function saveBtn() {
  $(".saveBtn").click(function (event) {
    var savedobj = {};
    var dayCard = document.querySelectorAll(".daycard");
    console.log(dayCard);
    console.log(savedobj);
  });
}

var dayCard = document.querySelectorAll(".day-card");
var savedCardStringify = "";
saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var savedCard = {
    titleRecipe: titleRecipe,
    songTitle: songTitle,
    artists: artists,
  };
  localStorage.setItem("savedCardStringify", JSON.stringify(savedCard));
});

function recentSaved () {
  $(".recent").on("click",function(){
    document.location.replace("recipe.html");
  })
}
recentSaved()

