//Gi
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd9d33242b0msh33204813b478dddp15d47ajsne912a7d2c892',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };

// fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=celery', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


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




//spotify playlist 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd9d33242b0msh33204813b478dddp15d47ajsne912a7d2c892',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  fetch('https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


    //pick your favorite artist 
    //place the artist you want or type of music and it displays a list of URL's and music videos
    fetch("https://itunes.apple.com/search?term=Billie+Ellish&limit=25")
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));