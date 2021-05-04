


/** Afficher le nombre d'elements dans le panier */




DisplayNumber()
function DisplayNumber(){ 
    let CartNumber = JSON.parse(localStorage.getItem("NumberOfArticles"));
    let LoctoDisplay = document.getElementById("ArtNumber");
    
    
    if(CartNumber == null){
        LoctoDisplay.style.opacity = 0;
    }
    else{
        LoctoDisplay.innerText = CartNumber
    }
    }



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


 
/** Affichage des données correspondant à l'article cliqué */
 
 
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
    cloneElement.getElementById("camera__id").setAttribute('value', article._id) 

    
    document.getElementById('main').appendChild(cloneElement)

    const btnBackToIndex = document.getElementById('btnBackToIndex');
   
    btnBackToIndex.addEventListener('click', (ev) =>{
        ev.preventDefault();
        window.location.href = 'index.html'
    })
    
     /** Stocker les Données sur l'API Storage au click du Bouton " Ajouter au Panier"  */

     const selector = document.getElementById('lens_select');
     const selector1 = document.getElementById('Quantity');
     
     
    const btnAdd = document.getElementById("btnAddToCart");
    btnAdd.addEventListener("click", () =>{
        
        const cameraType = document.getElementById('camera__title').textContent
        const cameraPrice = article.price/100
        const cameraLens = document.getElementById('lens_select')[selector.selectedIndex].id
        const cameraQuantity = document.getElementById('Quantity')[selector1.selectedIndex].id
        const cameraId = document.getElementById("camera__id").value
        

        const order = {
            Type:cameraType, 
            Price:cameraPrice, 
            Lens:cameraLens, 
            Quantity:cameraQuantity,
            ID: cameraId }
            
           
           

        
    /** Vérifier si le panier contient des données et les convertir en objet JS (via JSON.Parse) */


    let Cart = JSON.parse(localStorage.getItem("products"))


   
    /** Si il y a déjà des produits d'enregistrés dans le localStorage */

    if (Cart){
        Cart.push(order);
        localStorage.setItem("products", JSON.stringify (Cart))
        
        

    }

    /**Si il n'y a pas de produits d'enregistré dans le LocalStorage */
    else{Cart = []
        Cart.push(order);
        localStorage.setItem("products", JSON.stringify (Cart))
        

    }

/**-----------------Rafraichissement Span Nombre de produit header-------------- */
updateDiv()

function updateDiv()
    { 
        document.getElementById("ArtNumber").innerText = document.getElementById("ArtNumber").innerText ;
    } 


     /** Pop-Up confirmation d'ajout au panier */



let Number = []
let ArticleNumber = JSON.parse(localStorage.getItem('products'));



     for (g = 0; g < ArticleNumber.length; g++){
         let numberOfArticleOrdered = ArticleNumber[g].Quantity;
         

         numberOfArticleOrdered = parseInt(numberOfArticleOrdered)
         

         Number.push(numberOfArticleOrdered)    

         const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
         
         let NumberToDisplay = (Number.reduce(reducer));
        
         
         localStorage.setItem("NumberOfArticles", JSON.stringify (NumberToDisplay))

         location.reload();
         
         
               
         
     }
    

    })
    
}
