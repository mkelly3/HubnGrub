

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
      console.log(ingrident, time);

      if(time ==="Easy Meals Under 30 minutes"){
            console.log('yes');
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
            
            document.location.href ="recipe.html";
            console.log(response);
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
      
       document.location.href ="recipe.html";
       console.log(response)
      })
           .catch(err => console.error(err)); 
      }
      
}

function getMusic(music){
      //search for an artisit based on genre 
      fetch("https://itunes.apple.com/search?entity=song&attribute=genreIndex&term="+music+"&limit=25")
      
      .then(function (response) {
            return response.json();
        })

      .then(function (response) {
            console.log(response)
            document.location.href ="recipe.html";
      })

      .catch(err => console.error(err));

}


function onSearchButton(){
       
      $('.searchBtn').click(function(event){
            event.preventDefault();
            
            if(dishElementEl.selectedIndex === 0 || cookingTimeEl.selectedIndex === 0){
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

