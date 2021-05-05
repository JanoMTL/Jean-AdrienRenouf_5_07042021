let contact = JSON.parse(localStorage.getItem("contact"));
let userName = contact.contact.firstName;
let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
let PurchaseOrder = JSON.parse(localStorage.getItem("PurchaseConfirmation"));
let Order = PurchaseOrder.orderId;

document.getElementById("message").innerHTML = `
<h1 class="confMessage">Votre commande est confirmée. Merci pour votre confiance ${userName} !</h1>
        <p id="totalPrice">Montant total de vos achats: ${totalPrice} € </p>
        <p id="orderNumber">Votre numéro de commande est le <br>${Order}</p>
        <br>
        <br>
        <div id="btnbox">
        <button id="finalbtn"> Revenir à la page d'accueil</button>
        </div>

`;

const btnBack = document.getElementById("finalbtn");

btnBack.addEventListener("click", (even) => {
  even.preventDefault();

  localStorage.removeItem("PurchaseConfirmation");
  localStorage.removeItem("contact");
  localStorage.removeItem("totalPrice");

  window.location.href = "index.html";
});
