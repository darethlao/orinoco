// Récupérer les articles et les articles commandées du server
const url = ` http://localhost:3000/api/teddies/order`;
const panier = JSON.parse(localStorage.getItem("order")) || [];
console.log(url);
console.log(panier);

// Récupérer les données des articles du panier dans le localStorage
let articleStockeDansLocalstorage = JSON.parse(localStorage.getItem("article"));
console.log(articleStockeDansLocalstorage);

// --------------------------Numéro de commande -------------------------------
let numeroCommande = document.querySelector("#numero-commande");
let numeroCommandeHtml = `<h5>Votre commande ci-dessous est bien confirmée sous le numéro</h5>
<h5><strong>numéro de commande</strong></h5>
<h4 style="color: blueviolet"><strong>Merci et à bientôt :)</strong></h4>
<br/>
`;
// Injecter le code HTML dans panier.html
numeroCommande.innerHTML=numeroCommandeHtml;

// --------------- Affichage des produits du panier --------------------------
let articleSelectionne3 = document.querySelector("#bloc-articles-panier");
console.log(articleSelectionne3);

// Afficher si le panier est vide
if (articleStockeDansLocalstorage === null) {
    let panierVide = '<div class="container-panier-vide my-4">\
        <h4 style="color: red; text-align: center"> Mon panier est vide :( </h4>\
    </div>\
    ';
    articleSelectionne3.innerHTML = panierVide;

// Afficher les articles sélectionnés si le panier n'est pas vide
}
else {
    function recupererTousArticlesSelectionnes() {
        structureArticlesDansPanier = [];
        let container = document.getElementById("bloc-articles-panier");
        console.log(container.childElementCount);
        for (let j = 0; j < articleStockeDansLocalstorage.length; j++) {
            structureArticlesDansPanier = structureArticlesDansPanier + `
            <div id="articles_panier" class="row">
                <div class="col col-sm-4">
                </div>
                <div class="col-3 col-sm">
                    <strong>${articleStockeDansLocalstorage[j].name}</strong>
                </div>
                <div class="col-2 col-sm text_en_suspension">
                    ${articleStockeDansLocalstorage[j].color}
                </div>
                <div class="col-2 col-sm text-center">
                    ${articleStockeDansLocalstorage[j].quantity}
                </div>
                <div class="col-2 col-sm text-center">    
                    ${articleStockeDansLocalstorage[j].price} €
                </div>
                <div class="col col-sm-4">
                </div>
            </div>
        `;
        }
        // Injecter le code HTML dans panier.html
        articleSelectionne3.innerHTML = structureArticlesDansPanier;
        console.log(container.childElementCount);
    }
    recupererTousArticlesSelectionnes()
}

// ---------------------------Total quantité et prix ---------------------------
// Afficher le total des quantités commandées et des prix
let articleSelectionne4 = document.querySelector("#total-commande");
// Calculer le total des quantités commandées
let totalQuantite = []
for (let k = 0; k < articleStockeDansLocalstorage.length; k++) {
    let quantiteArticlesDansPanier = articleStockeDansLocalstorage[k].quantity;
    totalQuantite.push(quantiteArticlesDansPanier)
}
let quantites = (accumulator, currentvalue) => accumulator + currentvalue;
let calculQuantiteTotal = totalQuantite.reduce(quantites);
console.log(calculQuantiteTotal);
// Calculer le total des prix
function prixTotal(){
    let totalPrix = []
    for (let l = 0; l < articleStockeDansLocalstorage.length; l++) {
        let prixArticlesDansPanier = articleStockeDansLocalstorage[l].price;
        totalPrix.push(prixArticlesDansPanier)
    }
    let prix = (accumulator, currentvalue) => accumulator + currentvalue;
    let calculPrixTotal = totalPrix.reduce(prix);
    console.log(calculPrixTotal);
        if(calculPrixTotal !== null) {
            return calculPrixTotal
        } else {
            return false
        }
    }
let calculPrixTotal = prixTotal()
let totalCommande = `<div id="bloc-libelle-panier" class="col">
    <div class="row">
        <div class="col col-sm-4">
        </div>
        <div class="col-3 col-sm py-4">
        </div>
        <div class="col-2 col-sm py-4" style="text-decoration-line:underline">
            <strong>TOTAL</strong>
        </div>
        <div class="col-2 col-sm text-center py-4">
        <h5>${calculQuantiteTotal}</h5>
        </div>
        <div class="col-2 col-sm text-center py-4">    
            <h5>${calculPrixTotal} €</h5>
        </div>
        <div class="col col-sm-2 py-4">
        </div>
        <div class="col col-sm-2">
        </div>
    </div>
</div>
`;
// Injecter le code HTML dans panier.html
articleSelectionne4.innerHTML=totalCommande;

// Sélectionner l'identifiant où je vais mettre le code HTML pour l'option couleur et le bouton
let articleSelectionne5 = document.querySelector("#formulaire");
console.log(articleSelectionne5);

