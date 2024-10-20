

// definir 


const username  = document.querySelector('#username')
const svgScore  = document.querySelector('#svgScore')
const scorefinal  = document.querySelector('#scorefinal')
const mostRecentScore  = document.querySelector('#mostRecentScore')


const highScore  = JSON.parse(localStorage.getItem('highScore')) || []

const MAX_HIGH_SCORE = 8

scorefinal.innerText = mostRecentScore

username.addEventListener('keyup', () => {

     svgScore.disabled = !username.value
})


            svgScore = e => {

                e.preventDefault()
                
                const score = {

                    score : mostRecentScore,
                    name : username.value
                }

                highScore.push(score)

                highScore.sort((a,b) => {

                    return b.score - a.score
                })

                highScore.splice(5)

                localStorage.setItem('highScore', JSON.stringify(highScore))
                window.location.assign('/')

            }


 

