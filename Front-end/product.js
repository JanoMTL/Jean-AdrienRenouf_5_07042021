/** Récupéation de l'ID du produit cliké dans l'URL */


let params = new URLSearchParams(window.location.search)
const id = params.get('id')


/**Récupération des données sur L'API */

 main ()
 async function main(){
     const articles = await getArticles()
     for(article of articles){
     displayArticles(article)
     }   
 }
 
 
 function getArticles() {
     return fetch(" http://localhost:3000/api/cameras")
         .then(function(httpBodyResponse){
             return httpBodyResponse.json()
 
         })
         .then(function(articles){
             return articles
         })
         .catch(function(error){
             alert(error)
         })
     
 }


 
/** Afficher les données correspondant à l'article cliké */
 
 
 function displayArticles(article){
    const templateElement = document.getElementById("templateArticle")
    const cloneElement = document.importNode(templateElement.content, true)
 
    if(id === article._id){ 
        const objectifs = article.lenses
        const lenseSelect = cloneElement.getElementById("lens_select")
        for (const i in article.lenses) {
            let option = document.createElement("option");
            option.setAttribute("value", i);
            option.textContent = article.lenses[i];
            lenseSelect.appendChild(option);
        }

        const qty = [1,2,3,4,5,6,7,8,9,10]
        const qtySelect = cloneElement.getElementById("Quantity")
        for (const i in qty) {
            let option = document.createElement("option");
            option.setAttribute("value", i);
            option.textContent = qty[i];
            qtySelect.appendChild(option);
        }

    cloneElement.getElementById("camera__title").textContent = article.name
    cloneElement.getElementById("camera__description").textContent = article.description
    cloneElement.getElementById("camera__img").src = article.imageUrl
    cloneElement.getElementById("camera__price").textContent = article.price/100 + ' €'
    
    
    document.getElementById('main').appendChild(cloneElement)
    
 }



 /** Afficher un message en cas d'erreur */

 

}