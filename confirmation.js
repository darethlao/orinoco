// Récupérer l'id de la commande du serveur dans le local storage
const responseId = localStorage.getItem("responseId");
console.log(`responseId : ${responseId}`);

// Récupérer le prix total de la commande
const calculPrixTotal = localStorage.getItem("calculPrixTotal");
console.log(`calculPrixTotal : ${calculPrixTotal}`);

// Récupérer les données des articles du panier dans le localStorage
const article = localStorage.getItem("article");
console.log(`article : ${article}`);

// -------------------------- Afficher la confirmation de la commande avec orderId et le prix total -------------------------------
let confirmationCommande = document.querySelector("#numero-commande");
let numeroCommandeHtml = `<h5>Votre commande ci-dessous est bien confirmée sous le numéro</h5>
<h5><strong>${responseId}</strong></h5>
<h5>au prix total de <strong>${calculPrixTotal} €</strong></h5>
<h4 style="color: blueviolet"><strong>Merci et à bientôt :)</strong></h4>
<br/>
`;
// Injecter le code HTML dans panier.html
confirmationCommande.innerHTML=numeroCommandeHtml;
console.log(confirmationCommande);

// Effacer tout le local storage sauf le formulaire
function enleverCleLocalStorage(key){
    localStorage.removeItem(key);
};
enleverCleLocalStorage("article");
enleverCleLocalStorage("calculPrixTotal");
enleverCleLocalStorage("responseId");

