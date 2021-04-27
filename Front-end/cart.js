
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

    let table = []
    let cartDisplay = document.getElementById('Cart__cont--body')

for(k=0;k<ProduitsEnregistrésDansLocalStorage.length; k++){


    table = table + ` 
    <tr id="cartLine">
        <th> ${ProduitsEnregistrésDansLocalStorage[k].Type}</th>
        <th> ${ProduitsEnregistrésDansLocalStorage[k].Lens}</th>
        <td> ${ProduitsEnregistrésDansLocalStorage[k].Quantity}</td>
        <td> ${ProduitsEnregistrésDansLocalStorage[k].Price}</td>
        <th> € </th>
        <th><button class="btn-Suppr"><i class="far fa-trash-alt"></button></i> </th>
     </tr>`;}

     if(k === ProduitsEnregistrésDansLocalStorage.length){ 
     cartDisplay.innerHTML = table;
   }  
}


/**Supprimer des articles du panier */

let btnSuppr = document.querySelectorAll('.btn-Suppr');

for(let p=0; p<btnSuppr.length; p++){
    btnSuppr[p].addEventListener("click",(ee) =>{ 
        ee.preventDefault(); 
        
    let IdProdToDelete = ProduitsEnregistrésDansLocalStorage[p].ID;
    console.log(ProduitsEnregistrésDansLocalStorage[p].ID);

  ProduitsEnregistrésDansLocalStorage = ProduitsEnregistrésDansLocalStorage.filter(element => element.ID ==IdProdToDelete)


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
    email: userEmail,
    

}

/**---------------VERIFICATION DES INFORMATIONS AVANT VALIDATION DE L'ENVOI*-----------*/

/** Controle de la validité du prénom*/
function firstNameControl(){ 
if(/^[A-Za-z-]{2,25}$/.test(userFirstName)){
    const FirstNameValid = document.getElementById("firstname").style.borderColor= "green"
return true;

}else{
const firstNameError = document.getElementById("firstname").style.borderColor= "red"
return false;
}
};

/** Controle de la validité du Nom */
function lastNameControl(){ 
    if(/^[A-Za-z-]{2,25}$/.test(userLastName)){   
        const LastNameValid = document.getElementById("lastname").style.borderColor= "green"
    return true;
    
    }else{   
        const LastNameError = document.getElementById("lastname").style.borderColor= "red" 
    return false; }
     };


/** Controle de la validité de l'adresse */

function addressControl(){ 
    if(/^[A-Za-z0-9 -.,_áàâäãéèêëíìîïóòôöõúù]{2,40}$/.test(userAddress)){   
        const AddressValid = document.getElementById("address").style.borderColor= "green"
    return true;
    
    }else{  
        const AddressError = document.getElementById("address").style.borderColor= "red"
    return false; }
     };


/**controle de la validité de la Ville */

function cityControl(){ 
    if(/^[a-zA-Z'éèà,.\s-]{2,25}$/.test(userCity)){  
        const CityValid = document.getElementById("city").style.borderColor= "green" 
    return true;
    
    }else{  
        const CityError = document.getElementById("city").style.borderColor= "red"  
    return false; }
     };


/**Controle de l validité de l'e-mail */
function emailControl(){ 
    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userEmail)){ 
        const EmailValid = document.getElementById("email").style.borderColor= "green"     
    return true;
    
    }else{  
        const EmailError = document.getElementById("email").style.borderColor= "red" 
    return false; }
     };


/**------------FIN VERIFICATION DES INFORMATIONS AVANT VALIDATION DE L'ENVOI */



/** Envoyer l'Ojet contenant les données sur le LocalStorage  avec la clé "UserInfos"*/
if(firstNameControl() && lastNameControl() && addressControl () && emailControl() && cityControl()){ 
localStorage.setItem("UserInfos", JSON.stringify (user)) 

/** Envoi de la commande au server */

/*const options = {
    method: "POST", 
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user, ProduitsEnregistrésDansLocalStorage), 

}

const placeOrder = fetch("http://localhost:3000/api/cameras/order", options);

*/
}
else{
    alert( "Oups, Il semberait que les informations renseignées ne sont pas correctes, Merci de vérifier les champs encadrés de rouge. ")
}


 });