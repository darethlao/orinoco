// Récupérer les données des articles du panier dans le localStorage
let articleStockeDansLocalstorage = JSON.parse(localStorage.getItem("article"));
console.log(articleStockeDansLocalstorage);

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
                    <strong>${articleStockeDansLocalstorage[j].modele}</strong>
                </div>
                <div class="col-2 col-sm text_en_suspension">
                    ${articleStockeDansLocalstorage[j].couleur}
                </div>
                <div class="col-2 col-sm text-center">
                    ${articleStockeDansLocalstorage[j].quantite}
                </div>
                <div class="col-2 col-sm text-center">    
                    ${articleStockeDansLocalstorage[j].prix} €
                </div>
                <div class="col col-sm-4">
                    <button class="btn-supprimer fa fa-trash-o" id-article-supprime="${articleStockeDansLocalstorage[j].reference}"></button>
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
    let quantiteArticlesDansPanier = articleStockeDansLocalstorage[k].quantite;
    totalQuantite.push(quantiteArticlesDansPanier)
}
let quantites = (accumulator, currentvalue) => accumulator + currentvalue;
let calculQuantiteTotal = totalQuantite.reduce(quantites);
console.log(calculQuantiteTotal);
// Calculer le total des prix
function prixTotal(){
let totalPrix = []
for (let l = 0; l < articleStockeDansLocalstorage.length; l++) {
    let prixArticlesDansPanier = articleStockeDansLocalstorage[l].prix;
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
            <button class="btn-vider-panier fa fa-trash"> vider le panier</button>
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

// ------------------------ Supprimer un article ---------------------------
// Ecouter les id des articles à supprimer
let btn_supprimer = document.querySelectorAll(".btn-supprimer");
console.log(btn_supprimer);
document.body.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-supprimer")){
        console.log(event.target);
        let id_a_supprimer = event.target.getAttribute("id-article-supprime");
        console.log(id_a_supprimer)
        // Supprimer avec filter
        articleStockeDansLocalstorage = articleStockeDansLocalstorage.filter(
        el => el.reference !== id_a_supprimer);
        console.log(articleStockeDansLocalstorage);
        // Mettre dans le local storage
        localStorage.setItem("article", JSON.stringify(articleStockeDansLocalstorage));
        // Avertir que l'article est supprimé
        alert("Cet article est supprimé du panier");
        window.location.href = "panier.html";
    }
})

// ------------------------- Vider le panier ----------------------------------
// Sélectionner l'id du bouton "btn_vider_panier"
let btn_vider_panier = document.querySelector(".btn-vider-panier");
console.log(btn_vider_panier);

// Supprimer l'id de l'article supprimé du local storage
btn_vider_panier.addEventListener('click', (e)=> {
    e.preventDefault();
    localStorage.removeItem("article");
    alert("Le panier a été vidé");
    window.location.href = "panier.html";
})

// ------------------------------ Formulaire -------------------------------------
// Créer le formulaire pour les coordonnées du client
let prototype3 = `<!-- bouton de confirmation de commande-->
<div class="row py-4 text-center" style="background:rgb(243, 233, 241);">
    <div class="col ">
        <h5>Je complète mon formulaire ci-dessous
            <br/> pour confirmer ma commande
        </h5>
    </div>
</div>
<!-- Formulaire -->
<div class="row text-center" style="background:rgb(243, 233, 241);">
    <div class="col ">
        <form>
            <select id="civilite">
                <option value="0">Civilité</option>
                <option value="1">Madame</option>
                <option value="2">Monsieur</option>
            </select>
            <input type="text" name="nom" placeholder="Mon nom" maxlength="50" id="nom">
            <br/>
            <input type="text" name="prénom" placeholder="Mon prénom" maxlength="50" id="prenom">
            <br/>
            <input type="email" name="email" placeholder="Mon email" maxlength="50" id="email">
            <br/>
            <input type="text" name="adresse" placeholder="Mon adresse" maxlength="50" id="adresse">
            <br/>
            <input type="text" name="ville" placeholder="Ma ville" maxlength="50" id="ville">
            <br/>
            <input type="submit" value="Je confirme ma commande">              
        </form>

        <p style="color: red;" id="erreur"></p>
    </div>
</div>
`;
// Injecter le code HTML dans produit.html
articleSelectionne5.innerHTML=prototype3;

// Récupérer les coordonnées du client quand il clique sur le bouton "je valide mes coordonnées" 
document.getElementById("formulaire").addEventListener("submit", function(e) {
    let erreur;
    // Récupérer tous les inputs
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "J'ai oublié de renseigner tous les champs";
        }
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }
    else {
        alert('Ma commande est confirmée !');
    }
})
