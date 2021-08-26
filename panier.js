// Récupérer les données des articles du panier dans le localStorage
let articleStockeDansLocalstorage = JSON.parse(localStorage.getItem("article"));
console.log(articleStockeDansLocalstorage);

// --------------- Affichage des produits du panier --------------------------
let articleSelectionne3 = document.querySelector("#bloc-articles-panier");
console.log(articleSelectionne3);

// Afficher si le panier est vide
if (articleStockeDansLocalstorage === null) {
let panierVide = '<div class="container-panier-vide">\
    <p> Le panier est vide </p>\
</div>\
';
articleSelectionne4.innerHTML = panierVide;
} else {
    console.log("Mon panier n'est pas vide");
}
