
//look up recipes based off a single ingrident

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





    //pick your favorite artist 
    //place the artist you want or type of music and it displays a list of URL's and music videos
    fetch("https://itunes.apple.com/search?term=Billie+Ellish&limit=25")
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  

var homeCardEl = document.querySelector(".homeCard");
var optionsEl = document.querySelector('.option');

function onStartButton() {
      $('.startBtn').click(function(){
            homeCardEl.setAttribute("data-style","hide");
            optionsEl.removeAttribute("data-style","hide");


      })

};

onStartButton();

