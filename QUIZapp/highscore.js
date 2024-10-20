

 const ListeScore = document.querySelector('#ListeScore')
 const highScore = JSON.parse(localStorage.getItem('highScore')) || []

   ListeScore.innerHTML = 

   highScore.map(score => {

       return `<li class = "highScore">${score.name} - ${score.score}`
   }).join('')