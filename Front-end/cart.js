
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
       let subTotal = Article.Quantity*Article.Price
       document.getElementById('Cart__cont--body').appendChild(tr)
       
       tr.innerHTML = `<th> ${Article.Type}</th>
                        <th> ${Article.Lens}</th>
                        <td> ${Article.Quantity}</td>
                        <td> ${Article.Price}</td>
                        <th> € </th>
                        <td> ${subTotal} </td>
                         <th> € </th>

                        `     
    });
  
 }

 /**------------------VALIDER LA COMMANDE----------------------------- */

 /** Selectionner le le bouton "Valider votre commande" et ajouter un EventListener */

 const btnValidate = document.getElementById("Btn-go");
 btnValidate.addEventListener("click", (e) =>{
     e.preventDefault();

/** Récupérer les données saisies par l'utilisateur  et les stocker dans des const*/

const userFirstName = document.getElementById('firstname').value
const userLastName = document.getElementById('lastname').value
const userAddress = document.getElementById('address').value
const userCity = document.getElementById('city').value
const userEmail = document.getElementById('email').value

/** Regrouper toutes les données saisies dans un Objet */

const user = {
    firstName: userFirstName,
    lastName: userLastName,
    address: userAddress,
    city: userCity,
    email: userEmail

}

/**---------------VERIFICATION DES INFORMATIONS AVANT VALIDATION DE L'ENVOI*-----------/



/** Envoyer l'Ojet contenant les données sur le LocalStorage  avec la clé "UserInfos"*/
localStorage.setItem("UserInfos", JSON.stringify (user))

/** Regrouper les coordonnées de l'utilisateur (UserInfos) et le détails de sa commande (products) dans un seul objet (finalOrder) */

const finalOrder = {
    ProduitsEnregistrésDansLocalStorage,
    user
}
console.log(finalOrder);


 });