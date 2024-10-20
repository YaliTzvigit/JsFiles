

/* script  */



const question = document.querySelector("#question"); 
const choix =  Array.from(document.querySelectorAll(".choice-text")); 
const progressText = document.querySelector("#progressText"); 
const scoreText = document.querySelector("#Score"); 
const progressBarFull = document.querySelector("#progressBarFull");




   // Définir les constantes


   let currentQuestion = {}
   let Acceptingrep = true
   let score = 0
   let questionCounter = 0
   let AvailableQuestions = []

   
   // Créer mes questions : 

        let questions = [

            {
                question: 'Quelle est le 45ième président des USA ?',
                choice1 : 'Joe Bidden',
                choice2 : 'Donald Trump',
                choice3 : 'Barack Obama',
                choice4 : 'Mark piece',

                answer : 2,
            },

            {
                
                    question: 'Que signifie le mot << Blooms >> en Français ?',
                    choice1 : 'Fumiers',
                    choice2 : 'Fleurs',
                    choice3 : 'Papiers',
                    choice4 : 'Désirs',
    
                    answer : 2,
                
            },

            {
                question: 'La moitié de 6 + 6 ?',
                choice1 : '6',
                choice2 : '7',
                choice3 : '9',
                choice4 : 'Aucune est correcte!',

                answer : 3,
            },

            {
                question : 'La marque DS appartient à quel concessionnaire auto ?',
                 choice1 : 'Mercedes',
                 choice2 : 'Citroen',
                 choice3 : 'Peugeot',
                 choice4 : 'Toyota',

                 answer : 2,
                 
            },

            {

                question : 'Quelle est le nombre d\'employés travaillant à temps plein chez Google ?',
                    choice1: '36.000',
                    choice2 : '52.000',
                    choice3 : '72.000',
                    choice4 : '44.000',

                      answer : 3,
            },

            {

                question : 'Quelle lettre alphabétique utilise t-on pour designer 500 en chiffres romains? ',
                    choice1 : 'X',
                    choice2 : 'L',
                    choice3 : 'M',
                    choice4 : 'D',

                        answer : 4,
            },

            {

                question : 'Quelle est la plus grosse planète du sytème solaire ?',
                    choice1 : 'Venus',
                    choice2 : 'Saturne',
                    choice3 : 'Mars',
                    choice4 : 'Jupiter',

                         answer : 2,
            },

            {

                question : 'Que veut dire le mot anglais << Stones >> ?',
                    choice1 :'Salades',
                    choice2 :'Pierres',
                    choice3 :'Rasoirs',
                    choice4 :'Papiers',  answer : 2,

                    
            },
            {
                question : 'L\'alphabet hébreux contient combien de lettres ?',
                    choice1 : '23',
                    choice2 : '25',
                    choice3 : '22',
                    choice4 : '26',

                      answer : 3,
            },

            {

                question : 'L\'arc-en-Ciel a combien de couleurs : ',
                  choice1 : '8',
                  choice2 : '6',
                  choice3 : '7',
                  choice4 : '5',
                        answer : 3,    
            }
        ]

    
          /*  Definir le score et le nombre de questions  */

        const SCORE_POINTS =  50     // 50 points à chaque bonne réponse!
        const MAX_QUESTIONS = 10     // Nombre de Questions

            // Avant que le jeu commence : 
                // nb question > defini
                // score initialisé à (0)
                // Question aussi à la premiere

         startGame = () => {

             questionCounter = 0
             score = 0
             AvailableQuestions = [...questions]
             getNewQuestion()
         }


         getNewQuestion = () => {

             if (AvailableQuestions.length === 0 || questionCounter > MAX_QUESTIONS ) {
                localStorage.setItem('mostRecentScore', score)
                return window.location.assign('C:/Users/HP/Documents/MikyJs/QUIZapp/endofgame.html')
             }

             questionCounter++
             progressText.innerHTML = `Question ${questionCounter} sur ${MAX_QUESTIONS}`
             progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`


              // Génerer des questions aléatoires ...
                
                // Les questions changent après actualisation

                const questionIndex = Math.floor(Math.random() * AvailableQuestions.length)
                currentQuestion = AvailableQuestions[questionIndex]
                question.innerText = currentQuestion.question


                        //  Définir les choix de réponses ...


                        choix.forEach(choice => { 

                            // A chaque question son numero >

                            const number  = choice.dataset['number']
                            choice.innerText = currentQuestion['choice' + number] 
                        })


                AvailableQuestions.splice(questionIndex, 1)

                Acceptingrep = true }

            choix.forEach(choice => {

                 choice.addEventListener('click', e => {  // Selection du choix possible:  


         /* Donner le résultat du choix >  */  if(!Acceptingrep) return

                     Acceptingrep = false

                     const selectChoix = e.target
                     const selectRep = selectChoix.dataset['number']


                     let classToApply = selectRep == currentQuestion.answer ? 'correct' : 'incorrect'



                     if (classToApply === 'correct') { 

                            // > Le score augmente à chaque bonne réponse

                          incrementScore(SCORE_POINTS)  
                     } 

                     selectChoix.parentElement.classList.add(classToApply)

                     setTimeout(() => {

                        selectChoix.parentElement.classList.remove(classToApply)
                        getNewQuestion()
                     }, 1000)
                 })
            })

             /* Ajouter la valeur de 'num' à 'score'
                  et affecter le résultat à cette meme variable (num) */ 

                incrementScore = num  => {
                score += num
                scoreText.innerText = score
            }

            startGame()




