
/**Vérifier si le panier contient des données et les convertir en objet JS (via JSON.Parse) */

let ProduitsEnregistrésDansLocalStorage = JSON.parse(localStorage.getItem("products"))


/**--------------Affichage des éléments du panier dans un tableau----------------- */

/** Sélectionner la classe pour injecter les données */

const Contener = document.getElementById("Cart");


/** Verifier si le panier est vide */

if(ProduitsEnregistrésDansLocalStorage === null){

    /**Si le panier est vide, Afficher un message "Le Panier est Vide " */

    Contener.innerHTML = `<div class="EmptyCart"> Le Panier est Vide </div>`
}

/**Sinon, Afficher les éléments contenus dans le panier */
else{

    ProduitsEnregistrésDansLocalStorage.forEach(function(Article){
       let tr = document.createElement('tr');
       
     
       document.getElementById('Cart__cont--body').appendChild(tr)
    
       
       tr.textContent = Article.Type + '     ' +Article.Lens + '     ' + Article.Quantity +'     ' + Article.Price
      
    });
 }