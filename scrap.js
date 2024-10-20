


// Scraper un site web quelconque -> 

const require  =  ('request');
const cheerio  =  ('cheerio');


  // URL de la page à scraper 

    const url = 'https://www.indeed.com/';


    // Envoyer une requete GET pour recuperer le contenu de la page .... 


     request(url, (error, response, body) =>  {

          if (!error && response.statusCode === 200) {

             // Charger le contenu avec cheerio 

             const $ = cheerio.load(body);

             // Trouver un élément spécifique 

             const element = $('p');

             // Extraire le texte de l'élément 
             
             if (element.length > 0) {

                 const text = element.text();
                 console.log(text);
             } else  {

                 console.log(" Element non trouvé. ");
             }
          }  else {

             console.log("Echec de la requete. Code d'état : ", response.statusCode)
          }
     }) ; 

    
     


 