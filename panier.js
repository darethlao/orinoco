// Récupérer les données des articles du panier dans le localStorage
let articleStockeDansLocalstorage = JSON.parse(localStorage.getItem("article"));
console.log(articleStockeDansLocalstorage);

// --------------- Affichage des produits du panier --------------------------
let articleSelectionne3 = document.querySelector("#bloc-articles-panier");
console.log(articleSelectionne3);

// Afficher si le panier est vide
if (articleStockeDansLocalstorage === null) {
let panierVide = '<div class="container-panier-vide">\
    <p> Mon panier est vide </p>\
</div>\
';
articleSelectionne3.innerHTML = panierVide;
// Afficher les articles sélectionnés si le panier n'est pas vide
} else {
    structureArticlesDansPanier = [];
    for (let j = 0; j < articleStockeDansLocalstorage.length; j++) {
        structureArticlesDansPanier = structureArticlesDansPanier + `
        <div class="col-12 col-lg-3">
            <div class="card">
                <div class="card-body text-center">   
                    <h5><strong>${articleStockeDansLocalstorage[j].modele}</strong>
                    ${articleStockeDansLocalstorage[j].couleur}
                    ${articleStockeDansLocalstorage[j].quantit}
                    ${articleStockeDansLocalstorage[j].prix / 100} €
                    </h5>
                </div>
            </div>
        </div>
    `;
    }
// Injecter la code HTML dans panier.html
articleSelectionne3.innerHTML = structureArticlesDansPanier;
}

// Sélectionner l'identifiant où je vais mettre le code HTML pour l'option couleur et le bouton
let articleSelectionne4 = document.querySelector("#formulaire");
console.log(articleSelectionne4);

// Créer le formulaire pour les coordonnées du client
let prototype3 = `<div class="col">
<div class="card">
    <div class="card-body text-center">
        <form>
            <select id="civilite">
                <option value="0">Civilité</option>
                <option value="1">Madame</option>
                <option value="2">Monsieur</option>
            </select>
            <input type="text" name="nom" placeholder="Mon nom" maxlenght="50" id="nom">
            <br/>
            <input type="text" name="prénom" placeholder="Mon prénom" maxlenght="50" id="prenom">
            <br/>
            <input type="email" name="email" placeholder="Mon email" maxlenght="50" id="email">
            <br/>
            <input type="text" name="adresse" placeholder="Mon adresse" maxlenght="50" id="adresse">
            <br/>
            <input type="text" name="ville" placeholder="Ma ville" maxlenght="50" id="ville">
            <br/>
            <input type="submit" value="Je valide mes coordonnées" maxlenght="50">              
        </form>

        <p style="color: red;" id="erreur"></p>
    </div>
</div>
`;

// Injecter la code HTML dans produit.html
articleSelectionne4.innerHTML=prototype3;

// Récupérer les coordonnées du client quand il clique sur le bouton "!je valide mes coordonnées" 
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
    } else {
        alert('Mon formulaire est envoyé !');
        
    }

    // Retourner si un document n'est pas rempli
    // if (!ville.value) {
    //     erreur = "J'ai oublié de renseigner ma ville";
    // }
    // if (!adresse.value) {
    //     erreur = "J'ai oublié de renseigner mon adresse";
    // }
    // if (!email.value) {
    //     erreur = "J'ai oublié de renseigner mon email";
    // }
    // if (!prenom.value) {
    //     erreur = "J'ai oublié de renseigner mon prénom";
    // }
    // if (!nom.value) {
    //     erreur = "J'ai oublié de renseigner mon nom";
    // }

    // let nom = document.getElementById("nom");
    // let prenom = document.getElementById("prenom");
    // let email = document.getElementById("email");
    // let adresse = document.getElementById("adresse");
    // let ville = document.getElementById("ville");

})
