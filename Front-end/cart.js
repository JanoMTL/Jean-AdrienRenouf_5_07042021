
/**Vérifier si le panier contient des données et les convertir en objet JS (via JSON.Parse) */

let ProduitsEnregistrésDansLocalStorage = JSON.parse(localStorage.getItem("products"))





/**--------------Affichage des éléments du panier dans un tableau----------------- */

/** Sélectionner la classe pour injecter les données */

const Contener = document.getElementById("main_cart");


/** Verifier si le panier est vide */

if(ProduitsEnregistrésDansLocalStorage === null){

    /**Si le panier est vide, Afficher un message "Le Panier est Vide " */

    Contener.innerHTML = `<div class="EmptyCart"> Le Panier est Vide </div>`
}

/**Sinon, Afficher les éléments contenus dans le panier */
else{
let CartTable = [];
console.log(ProduitsEnregistrésDansLocalStorage);

for(b=0; b < ProduitsEnregistrésDansLocalStorage.lenght; b++ ){

   

}
    
}
