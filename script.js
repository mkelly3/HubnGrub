

var homeCardEl = document.querySelector(".homeCard");
var optionsEl = document.querySelector('.option');
var dishElementEl = document.querySelector('.dishElement');
var servingEl = document.querySelector('.servingSizeElement');
var cookingTimeEl = document.querySelector('.cookingTime');

//look up recipes based off a single ingrident







    //pick your favorite artist 
    //place the artist you want or type of music and it displays a list of URL's and music videos
    fetch("https://itunes.apple.com/search?term=Billie+Ellish&limit=25")
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  

function onStartButton() {
      $('.startBtn').click(function(){
            homeCardEl.setAttribute("data-style","hide");
            optionsEl.removeAttribute("data-style","hide");
      })

};

onStartButton();

// console.log(dishElementEl.options[dishElementEl.selectedIndex].text);
onSearchButton();


function getRecipes(ingrident,time,number){

}

const specification = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd9d33242b0msh33204813b478dddp15d47ajsne912a7d2c892',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=chicken', specification)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


      function onSearchButton(){
            $('.searchBtn').click(function(event){
                  event.preventDefault();
      
                  if(dishElementEl.selectedIndex === 0 || cookingTimeEl.selectedIndex === 0 || 
                        servingEl.selectedIndex === 0){
                              return;
                        }
      
                  var dishChoice = dishElementEl.options[dishElementEl.selectedIndex].text;
                  console.log(dishChoice);
                  
                  var timeChoice = cookingTimeEl.options[cookingTimeEl.selectedIndex].text;
                  console.log(timeChoice);
      
                  var numberChoice = servingEl.options[servingEl.selectedIndex].text;
                  console.log(numberChoice);  
      
                   getRecipes(dishChoice,timeChoice,numberChoice);
                   document.location.href ="recipe.html";
            })
      }