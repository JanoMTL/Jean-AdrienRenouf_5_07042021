

let contact = JSON.parse(
    localStorage.getItem("contact"))
let userName = contact.contact.firstName
let totalPrice = JSON.parse(
    localStorage.getItem("totalPrice"))
let PurchaseOrder = JSON.parse(
    localStorage.getItem("PurchaseConfirmation"))
let Order = PurchaseOrder.orderId




document.getElementById('main').innerHTML = `
<h1>Votre commande est confirmée. Merci pour votre confiance ${userName} !</h1>
        <p>Montant total:${totalPrice} € </p>
        <p>Votre numéro de commande est le ${Order}</p>
        <button><a href="index.html"> Revenir à la page d'accueil</a></button>
        

`