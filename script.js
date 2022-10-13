

var homeCardEl = document.querySelector(".homeCard");
var optionsEl = document.querySelector('.option');
var dishElementEl = document.querySelector('.dishElement');
var musicEl = document.querySelector('.musicChoice');
var cookingTimeEl = document.querySelector('.cookingTime');


function onStartButton() {
      $('.startBtn').click(function(){
            homeCardEl.setAttribute("data-style","hide");
            optionsEl.removeAttribute("data-style","hide");
      })

};

onStartButton();


function getRecipes(ingrident,time){
      //console.log(ingrident, time);

      if(time ==="Easy Meals Under 30 minutes"){
             const specification = {
            method: 'GET',
            headers: {
                  'X-RapidAPI-Key': 'd9d33242b0msh33204813b478dddp15d47ajsne912a7d2c892',
                  'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
      };
      
      fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q='+ingrident, specification)
      .then(function (response) {
            return response.json();
            })
      
            .then(function (response) {
            
            //document.location.href ="recipe.html";
            console.log(response);
            var dishName = []
            
            for(var i=0; i < 10; i++){
             dishName[i] = response.results[i].name;
            }
             console.log(dishName);

             var dishImgUrl = []

             for(var i=0; i < 10; i++){
                  dishImgUrl[i] = response.results[i].thumbnail_url;
                 }
                  console.log(dishImgUrl);
                  
            var nutrition = []

            for(var i=0; i < 10; i++){
                  nutrition[i] = response.results[i].nutrition;
                 }
                  console.log(nutrition);

            })
            .catch(err => console.error(err));

      }

      else{
            console.log('yes');
            const specification = {
           method: 'GET',
           headers: {
                 'X-RapidAPI-Key': 'd9d33242b0msh33204813b478dddp15d47ajsne912a7d2c892',
                 'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
           }
     };
     
     fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q='+ingrident, specification)
     .then(function (response) {
      return response.json();
      })

      .then(function (response) {
      
       //document.location.href ="recipe.html";
       console.log(response)
       var dishName = []
            
       for(var i=0; i < 10; i++){
            dishName[i] = response.results[i].name;
           }
            console.log(dishName);

            var dishImgUrl = []

            for(var i=0; i < 10; i++){
                 dishImgUrl[i] = response.results[i].thumbnail_url;
                }
                 console.log(dishImgUrl);
                 
           var nutrition = []

           for(var i=0; i < 10; i++){
                 nutrition[i] = response.results[i].nutrition;
                }
                 console.log(nutrition);
      })
           .catch(err => console.error(err)); 
      }
      
}

var musicResultEl = document.querySelector('.musicDisplay');
var songTitleEl = document.querySelector("#artist");

function getMusic(music){
      //search for an artist based on genre
      fetch("https://itunes.apple.com/search?entity=song&attribute=genreIndex&term="+music+"&limit=25")
      .then(function (response) {
            return response.json();
        })
      .then(function (response) {
            console.log(response);
            var musicDiv = document.createElement('div');
            var artistTitle = document.createElement('h3');
            var song = document.createElement('p');
            var songUrl= document.createElement('a');
            var link = document.createTextNode("This is link");
            songUrl.appendChild(link);
            songUrl.title = "This is Link";
            var artists = [];
            for(var i=0; i<8; i++){
                  artists[i] = response.results[i].artistName;
            }
            for(var i=0; i<artists.length; i++){
                  artistTitle.textContent = artists;
            }
            var songTitle = [];
            for(var i=0; i<8; i++){
                  songTitle[i] = response.results[i].trackName;
            }
            console.log(songTitle);
            for(var i=0; i<songTitle.length; i++){
                  song.textContent = songTitle;
            }
            console.log(song);
            var songLink = [];
            for(var i=0; i<8; i++){
                  songLink[i] = response.results[i].trackViewUrl;
            }
            for(var i=0; i<songLink;i++){
                  songUrl.href = songLink
            }
            console.log(songLink);
            musicDiv.appendChild(songUrl);
            musicDiv.appendChild(artistTitle);
            musicDiv.appendChild(song);
            musicResultEl.appendChild(musicDiv);
            musicResultEl.removeAttribute("data-style");
      })
      .catch(err => console.error(err));
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


function onSearchButton(){
       
      $('.searchBtn').click(function(event){
            event.preventDefault();
            
            if(dishElementEl.selectedIndex === 0 || cookingTimeEl.selectedIndex === 0 || musicEl.selectedIndex ===0){
                       return;
                  }

            var dishChoice = dishElementEl.options[dishElementEl.selectedIndex].text;
            console.log(dishChoice);
                        
            var timeChoice = cookingTimeEl.options[cookingTimeEl.selectedIndex].text;
            console.log(String(timeChoice));
            
            var musicChoice = musicEl.options[musicEl.selectedIndex].text;
            console.log(musicChoice); 

            getRecipes(dishChoice,timeChoice);
            getMusic(musicChoice);
            })
      }
onSearchButton();

