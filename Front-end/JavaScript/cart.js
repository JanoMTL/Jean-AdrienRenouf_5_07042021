
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




/**Vérifier si le panier contient des données et les convertir en objet JS (via JSON.Parse) */

let Cart = JSON.parse(
  localStorage.getItem("products")
);

/**--------------Affichage des éléments du panier dans un tableau----------------- */

/** Sélectionner la classe pour injecter les données */

const Contener = document.getElementById("Cart");

/** Verifier si le panier est vide */

if (
  Cart === null ||
  Cart == 0
) {
  /**Si le panier est vide, Afficher un message "Le Panier est Vide " */

  Contener.innerHTML = `<div class="EmptyCart"> Le Panier est Vide </div>`;
} else {

/**Sinon, Afficher les éléments contenus dans le panier */
  let table = [];
  let cartDisplay = document.getElementById("Cart__cont--body");

  for (k = 0; k < Cart.length; k++) {
    table =
      table +
      ` 
    <tr class"cartLine">
        <th class="ProdName"> ${Cart[k].Type}</th>
        <th class="ProdLens"> ${Cart[k].Lens}</th>
        <td class="ProdQty"> ${Cart[k].Quantity}</td>
        <td class="ProdPrice"> ${Cart[k].Price}</td>
        <th class="Prodeuro"> € </th>
        <th><button class="btn-Suppr"><i class="far fa-trash-alt"></button></i> </th>
     </tr>
     `;
  }

  if (k === Cart.length) {
    cartDisplay.innerHTML = table;
  }
}
/** ----------------AFFICHER LE PRIX TOTAL DU PANIER-------------------- */

/** Déclaration de la variable qui contient les prix du panier */

const TotalPrice = [];

/**Aller chercher les prix dans le panier */
if(Cart){
  
for (let r = 0; r < Cart.length; r++) {
  /** Multiplier les prix et les quantités pour obtenir les sous-totaux */

  let subTotalPrice =
    Cart[r].Quantity *
    Cart[r].Price;

  /** Créer un tableau avec tous les sous-totaux */

  TotalPrice.push(subTotalPrice);

  /** additionner tous les sous-totaux pour obtenir le total général */

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let GranTotal = TotalPrice.reduce(reducer);
  

  /** Injecter le Prix Total dans le HTML */

  const InjectPrice = document.getElementById("Cart__cont--total");
  InjectPrice.innerHTML = `${GranTotal}`;


  /**Envoyer le prix total dans le local Storage  */

  localStorage.setItem('totalPrice', JSON.stringify(GranTotal))
}
}

/** ------------------FIN AFFICHER LE PRIX TOTAL DU PANIER---------------------- */

/**-------------------------SUPPRIMER DES ARTICLES DU PANIER ------------------- */

/**Sélectionner les boutons "supprimer" */
let btnSuppr = document.querySelectorAll(".btn-Suppr");



/** Ecouter les boutons "supprimer" */
for (let p = 0; p < btnSuppr.length; p++) {
  btnSuppr[p].addEventListener("click", (ee) => {
    ee.preventDefault();
    /** Récuperer l'ID correspondant au bouton du produit à supprimer */
    console.log(Cart);
    let deleteSelected = Cart[p].ID;

    
    /** Sélectionner les produits à conserver (tous les produits ormis celui sélectionné) */

    /**
     * Filtre des Bouton en fonction de leur ID
     *
     * @param {Object} obj
     * @returns {Boolean}
     */
    const filtrerByID = (obj) => obj.ID !== deleteSelected;

    let ArticleToKeep = Cart.filter(filtrerByID);

    /**  Mise à jour de la Variable de stockage du panier */

    Cart = ArticleToKeep;

   

    /*  Mise à jour du nouveau panier dans le local Storage */

    localStorage.setItem(
      "products",
      JSON.stringify(Cart)
    );
    let Number = []
    let ArticleNumber = JSON.parse(localStorage.getItem('products'));
    
    
    
         for (g = 0; g < ArticleNumber.length; g++){
             let numberOfArticleOrdered = ArticleNumber[g].Quantity;
             
    
             numberOfArticleOrdered = parseInt(numberOfArticleOrdered)
             
    
             Number.push(numberOfArticleOrdered)    
    
             const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
             
             let NumberToDisplay = (Number.reduce(reducer));
    
           
             
             
             localStorage.setItem("NumberOfArticles", JSON.stringify (NumberToDisplay))

             
           
             
                   
             
         }

    /** Rechargement de la page Panier pour retirer les articles supprimés */

    window.location.href = "cart.html";


  });
}
const btnBackToIndex = document.getElementById('btn-cancel');
   
btnBackToIndex.addEventListener('click', (ev) =>{
    ev.preventDefault();
    window.location.href = 'index.html'
})
/**---------------------------VALIDER LA COMMANDE----------------------------- */

/** Selectionner le bouton "Valider votre commande" et ajouter un EventListener */

const btnValidate = document.getElementById("Btn-go");
btnValidate.addEventListener("click", (e) => {
  e.preventDefault();

  /** Récupérer les données saisies par l'utilisateur  et les stocker dans des const*/

  const userFirstName = document.getElementById("firstname").value;
  const userLastName = document.getElementById("lastname").value;
  const userAddress = document.getElementById("address").value;
  const userCity = document.getElementById("city").value;
  const userEmail = document.getElementById("email").value;

  /** Regrouper toutes les données saisies dans un Objet */

  const user = {
    firstName: userFirstName,
    lastName: userLastName,
    address: userAddress,
    city: userCity,
    email: userEmail,
  };

  /**---------------VERIFICATION DES INFORMATIONS AVANT VALIDATION DE L'ENVOI*-----------*/

  /** Controle de la validité du prénom*/
  function firstNameControl() {
    if (/^[A-Za-z-]{2,25}$/.test(userFirstName)) {
      const FirstNameValid = (document.getElementById(
        "firstname"
      ).style.borderColor = "green");
      return true;
    } else {
      const firstNameError = (document.getElementById(
        "firstname"
      ).style.borderColor = "red");
      return false;
    }
  }

  /** Controle de la validité du Nom */
  function lastNameControl() {
    if (/^[A-Za-z-]{2,25}$/.test(userLastName)) {
      const LastNameValid = (document.getElementById(
        "lastname"
      ).style.borderColor = "green");
      return true;
    } else {
      const LastNameError = (document.getElementById(
        "lastname"
      ).style.borderColor = "red");
      return false;
    }
  }

  /** Controle de la validité de l'adresse */

  function addressControl() {
    if (/^[A-Za-z0-9 -.,_áàâäãéèêëíìîïóòôöõúù]{2,60}$/.test(userAddress)) {
      const AddressValid = (document.getElementById(
        "address"
      ).style.borderColor = "green");
      return true;
    } else {
      const AddressError = (document.getElementById(
        "address"
      ).style.borderColor = "red");
      return false;
    }
  }

  /**controle de la validité de la Ville */

  function cityControl() {
    if (/^[a-zA-Z'éèà,.\s-]{2,30}$/.test(userCity)) {
      const CityValid = (document.getElementById("city").style.borderColor =
        "green");
      return true;
    } else {
      const CityError = (document.getElementById("city").style.borderColor =
        "red");
      return false;
    }
  }

  /**Controle de l validité de l'e-mail */
  function emailControl() {
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userEmail)) {
      const EmailValid = (document.getElementById("email").style.borderColor =
        "green");
      return true;
    } else {
      const EmailError = (document.getElementById("email").style.borderColor =
        "red");
      return false;
    }
  }

  /**------------FIN VERIFICATION DES INFORMATIONS AVANT VALIDATION DE L'ENVOI------- */


  /** Envoyer l'Ojet contenant les données sur le LocalStorage  avec la clé "UserInfos"*/
  if (
    firstNameControl() &&
    lastNameControl() &&
    addressControl() &&
    emailControl() &&
    cityControl()
  ) {
   

    let products = [];
/** création d'un tableau  "products" avec les ID produits pour envoi au server*/
    for( f=0; f<Cart.length; f++){

        let Idlist = Cart[f].ID
        products.push(Idlist)
   
    }

    /**ajout du tableau "products" à l'objet contact pour envoi au serveur */
    let contact = user

    const Order = {contact, products}

    
    

    /** envoi de la commande ("contact") sur le local Storage */

    localStorage.setItem("contact", JSON.stringify(Order))

    
    
    /** Envoi de la commande au serveur */

  
        const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Order)
    };
  
   const finalOrder = fetch(
      "http://localhost:3000/api/cameras/order",
      options
    )
  

    /** Gestion de la réponse du serveur  */

finalOrder.then(async(response) =>{

  
  try{
    const serverResponse = await response.json();
    
/** Si réponse OK, stocker la réponse dans le local storage  */
if(response.ok){
localStorage.setItem('PurchaseConfirmation', JSON.stringify (serverResponse))

/** Rediriger vers page de confirmation */

window.location.href = 'confirmation.html'

}

/** Sinon afficher le statut pour voir l'erreur */
else{
  console.log(`Réponse du serveur : ${response.status}`)

}
  }

  /** gestion erreur client */

  catch(err){
    alert(`ERREUR catch ${err}`)

  }

});

 
  


   }
});

/** -------------------------FIN VALIDER LA COMMANDE------------------------------ */
