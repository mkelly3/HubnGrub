

var homeCardEl =document.querySelector(".homeCard");
var optionsEl = document.querySelector('.option');
var proteinElementEl = document.querySelector('.proteinChoice');
var musicEl = document.querySelector('.musicChoice');
var veggieEl = document.querySelector('.vegetableSelection');
var resultsEl = document.querySelector("#recipeResult");


function onStartButton() {
      $('.startBtn').click(function(){
            homeCardEl.setAttribute("data-style","hide");
            optionsEl.removeAttribute("data-style","hide");
      })

};

onStartButton();


function getRecipes(ingrident1,ingrident2){
      console.log(ingrident1,ingrident2);
      fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=929b3b7b8bef46ec82a39bfd9c299472&ingredients='+ingrident1+',+'+ingrident2)
      .then(function (response) {
            return response.json();
            })

            .then(function (response) {
            console.log(response);

            var titleRecipe = [];
           for(var i=0; i<8; i++){
            titleRecipe[i] = response[i].title;
           }
           
           titleRecipe =titleRecipe. filter(item => item);
           for (i = 0; i < titleRecipe.length; i++) {
            $('#recipeName'+i).text(titleRecipe[i])
           }

           var recipeImg = [];

           for(var i=0; i<8; i++){
            recipeImg[i] = response[i].image;
           }

          recipeImg =recipeImg. filter(item => item);
           for (i = 0; i < recipeImg.length; i++) {
            $('#recipeImg'+i).attr({ "src": recipeImg[i], "alt": "Food Pic" });
            resultsEl.removeAttribute("data-style");
           }


           

      //      for(var i=0; i<title1.length; i++){
      //       for(var j=0; j<recipeImg.length;j++){
      //             recipeObj = {
      //                  list: [title1[i],recipeImg[j]]
      //             };

      //             foodName.textContent=recipeObj.list[title1];
      //             imageFood.src = recipeObj.list[recipeImg];
      //             resultsEl.appendChild(foodDiv);
      //       }
      //      }

           //console.log(recipeObj);
      //      console.log(title1);
      //      console.log(recipeImg);



            });
}
var musicResultEl = document.querySelector('.musicDisplay');
var songTitleEl = document.querySelector("#artist");
function getMusic(music){
      //search for an artisit based on genre 
      fetch("https://itunes.apple.com/search?entity=song&attribute=genreIndex&term="+music+"&limit=25")
      
      .then(function (response) {
            return response.json();
        })

      .then(function (response) {
            console.log(response);
            var musicDiv = document.createElement('div');
            var atrtistTitle = document.createElement('h3');
            var song = document.createElement('p');
            var songUrl= document.createElement('a');
            var link = document.createTextNode("This is link");
            songUrl.appendChild(link);
            songUrl.title = "This is Link";

            var artisits = [];
            
            for(var i=0; i<25; i++){
                  artisits[i] = response.results[i].artistName;
            }
            for(var i=0; i<artisits.length; i++){
                  atrtistTitle.textContent = artisits;  
            }
            var songTitle = [];
            for(var i=0; i<25; i++){
                  songTitle[i] = response.results[i].trackName;
            }
            console.log(songTitle);
            for(var i=0; i<songTitle.length; i++){
                  song.textContent = songTitle;  
            }
            console.log(song);


            var songLink = [];
            for(var i=0; i<25; i++){
                  songLink[i] = response.results[i].trackViewUrl;
            }
            for(var i=0; i<songLink;i++){
                  songUrl.href = songLink
            }

            console.log(songLink);

            musicDiv.appendChild(songUrl);
            musicDiv.appendChild(atrtistTitle);
            musicDiv.appendChild(song);
            musicResultEl.appendChild(musicDiv);
            musicResultEl.removeAttribute("data-style");

      })

      .catch(err => console.error(err));

}


function onSearchButton(){
       
      $('.searchBtn').click(function(event){
            event.preventDefault();
            
            if(proteinElementEl.selectedIndex === 0 || veggieEl.selectedIndex === 0 || musicEl.selectedIndex ===0){
                       return;
                  }

            var protein = proteinElementEl.options[proteinElementEl.selectedIndex].text;
            console.log(protein);
                        
            var veggieChoice = veggieEl.options[veggieEl.selectedIndex].text;
            console.log(veggieChoice);
            
            var musicChoice = musicEl.options[musicEl.selectedIndex].text;
            console.log(musicChoice); 

            getRecipes(protein,veggieChoice);
            //getMusic(musicChoice);
            })
      }
onSearchButton();

