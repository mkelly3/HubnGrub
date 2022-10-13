
var homeCardEl =document.querySelector(".homeCard");
var optionsEl = document.querySelector('.option');
var dishElementEl = document.querySelector('.dishElement');
var musicEl = document.querySelector('.musicChoice');
var cookingTimeEl = document.querySelector('.cookingTime');
var resultsEl = document.querySelector("#food");
function onStartButton() {
      $('.startBtn').click(function(){
            homeCardEl.setAttribute("data-style","hide");
            optionsEl.removeAttribute("data-style","hide");
      })
};
onStartButton();
function getRecipes(ingrident,time){
      //console.log(ingrident, time);
      // if(time ==="Easy Meals Under 30 minutes"){
        
      // };
      fetch("https://api.edamam.com/api/recipes/v2?q=chicken&app_id=c4b76db4&app_key=8e4555653962229a6f8dc77e94e23d4e")
      .then(function (response) {
            return response.json();
            })
            .then(function (response) {
            console.log(response);
            //resultsEl.textContent="";
            // var cardDiv = document.createElement('div');
            // var titleResult = document.createElement('h3');
            // var resultImg = document.createElement('img');
            // //cardDiv.append(imgEl);
            // var dishName = [];
            // for(var i=0; i < 10; i++){
            //  if (response.results[i].name){
            //       dishName[i]=response.results[i].name
            //  }
            //  }
            //  console.log(dishName);
            // for(var i =0; i<dishName.length; i++){
            //       titleResult.textContent = dishName;
            // }
            // cardDiv.appendChild(titleResult);
            // resultsEl.appendChild(cardDiv);
            // resultsEl.removeAttribute("data-style");
            //  var dishImgUrl = [];
            //  for(var i=0; i < 10; i++){
            //       dishImgUrl[i] = response.results[i].thumbnail_url;
            //      }
            //       console.log(dishImgUrl);
            // for(var i=0; i<dishImgUrl; i++){
            //       resultImg[i].src = dishImgUrl[i];
            // }
            // cardDiv.append(resultImg);
            })
            
            .catch(err => console.error(err));

      }

//       else{
//             console.log('yes');
//             const specification = {
//            method: 'GET',
//            headers: {
//                  'X-RapidAPI-Key': 'd9d33242b0msh33204813b478dddp15d47ajsne912a7d2c892',
//                  'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//            }
//      };
     
//      fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q='+ingrident, specification)
//      .then(function (response) {
//       return response.json();
//       })

//       .then(function (response) {
      
//        //document.location.href ="recipe.html";
//        console.log(response)
//        var dishName = []
            
//        for(var i=0; i < 10; i++){
//             dishName[i] = response.results[i].name;
//            }
//             console.log(dishName);

//             var dishImgUrl = []

//             for(var i=0; i < 10; i++){
//                  dishImgUrl[i] = response.results[i].thumbnail_url;
//                 }
//                  console.log(dishImgUrl);
                 
//            var nutrition = []

//            for(var i=0; i < 10; i++){
//                  nutrition[i] = response.results[i].nutrition;
//                 }
//                  console.log(nutrition);
//       })
//            .catch(err => console.error(err)); 
//       }
      
// }

function getMusic(music){
      //search for an artisit based on genre 
      fetch("https://itunes.apple.com/search?entity=song&attribute=genreIndex&term="+music+"&limit=25")
      
      .then(function (response) {
            return response.json();
        })

      .then(function (response) {
            console.log(response)
            var artisits = []
            
            for(var i=0; i<25; i++){
                  artisits[i] = response.results[i].artistName;
            }
            //console.log(artisits);

                  
            // artisits = artisits.filter(item => item);

            // for(var i=0; i<artisits.length; i++){
            //       $('.name').text(artisits[i])
            // }
            
            //document.location.href ="recipe.html";

            var songTitle = [];
            for(var i=0; i<25; i++){
                  songTitle[i] = response.results[i].trackName;
            }
            console.log(songTitle);

            var songLink = [];
            for(var i=0; i<25; i++){
                  songLink[i] = response.results[i].trackViewUrl;
            }
            console.log(songLink);


      })

      .catch(err => console.error(err));

}


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
            $(".displayResult").removeAttr("data-style");
            })
      }
onSearchButton();

