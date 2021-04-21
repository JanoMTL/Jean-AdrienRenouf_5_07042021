/** Récupéation de l'ID du produit cliké dans l'URL */


let params = new URLSearchParams(window.location.search)
const id = params.get('id')

/**Récupération des données sur L'API */

 main ()
 async function main(){ 
     const article = await getArticle()
     
     displayArticles(article)
       
 }
 
 
 function getArticle() {
     return fetch("http://localhost:3000/api/cameras/"+id)
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


 
/** Affichage des données correspondant à l'article cliké */
 
 
 function displayArticles(article){
    const templateElement = document.getElementById("templateArticle")
    const cloneElement = document.importNode(templateElement.content, true)
    
/** si l'ID de l'article n'est pas reconnu, renvoyer à la page d'accueil */
    if(id != article._id){ 
        window.location.href = 'index.html'
        }

/**si l'ID est reconnu, affichage des données demandées */
        const objectifs = article.lenses
        const lenseSelect = cloneElement.getElementById("lens_select")
        for (const i in article.lenses) {
            let option = document.createElement("option");
            option.setAttribute("value", i);
            option.setAttribute("id", article.lenses[i])
            option.textContent = article.lenses[i];
            lenseSelect.appendChild(option);
        }

        const qty = [1,2,3,4,5,6,7,8,9,10]
        const qtySelect = cloneElement.getElementById("Quantity")
        for (const i in qty) {
            let option = document.createElement("option");
            option.setAttribute("value", i);
            option.setAttribute("id", qty[i])
            option.textContent = qty[i];
            qtySelect.appendChild(option);
        }

    cloneElement.getElementById("camera__title").textContent = article.name
    cloneElement.getElementById("camera__description").textContent = article.description
    cloneElement.getElementById("camera__img").src = article.imageUrl
    cloneElement.getElementById("camera__price").textContent = article.price/100 + ' €'
    document.getElementById('main').appendChild(cloneElement)

    
    
     /** Stocker les Données sur l'API Storage au click du Bouton " Ajouter au Panier"  */

     const selector = document.getElementById('lens_select');
     const selector1 = document.getElementById('Quantity');

     
    const btnAdd = document.getElementById("btnAddToCart");
    btnAdd.addEventListener("click", () =>{
        
        const cameraType = document.getElementById('camera__title').textContent
        const cameraPrice = document.getElementById('camera__price').textContent
        const cameraLens = document.getElementById('lens_select')[selector.selectedIndex].id
        const cameraQuantity = document.getElementById('Quantity').id
        const order = { cameraType, cameraPrice, cameraLens, cameraQuantity}

        
    /** Vérifier si le panier contient des données et les convertir en objet JS (via JSON.Parse) */


    let ProduitsEnregistrésDansLocalStorage = JSON.parse(localStorage.getItem("products"))


    /** Pop-Up confirmation d'ajout au panier */

  



    /** Si il y a déjà des produits d'enregistré dans le localStorage */

    if (ProduitsEnregistrésDansLocalStorage){
        ProduitsEnregistrésDansLocalStorage.push(order);
        localStorage.setItem("products", JSON.stringify (ProduitsEnregistrésDansLocalStorage))
        
        

    }

    /**Si il n'y a pas de produits d'enregistré dans le LocalStorage */
    else{ProduitsEnregistrésDansLocalStorage = []
        ProduitsEnregistrésDansLocalStorage.push(order);
        localStorage.setItem("products", JSON.stringify (ProduitsEnregistrésDansLocalStorage))
        

    }

    
    

    })
    
}
