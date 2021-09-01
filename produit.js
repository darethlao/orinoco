// Récupérer l'id de l'article dans l'URL
let parsedUrl = new URL(window.location.href);
console.log(parsedUrl)
let id = parsedUrl.searchParams.get("id");
console.log(id);

// Aller chercher la base articles dans l'API Teddies
fetch("http://localhost:3000/api/teddies/" + id)
    .then(function(baseArticles) {
        return baseArticles.json();
    })
    .then(function(idArticleSelectionne) {
        // Afficher l'article correspondant à l'id sélectionné
        //let idArticleSelectionne = baseArticles.find(element => element._id === id);
        console.log(idArticleSelectionne);

// Sélectionner l'identifiant où je vais mettre le code HTML pour l'image, la description, l'id et le prix
let articleSelectionne1 = document.querySelector("#bloc-articles1");
console.log(articleSelectionne1);

// Code HTML pour l'affichage de l'article sélectionné
let prototype1 = `  <div class="col-12 col-lg-3">
                        <div class="card">
                    </div>
                    </div><div class="col-12 col-lg-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <a class="imageArticles" href="produit.html">
                                    <img src="${idArticleSelectionne.imageUrl}" height="200" >
                                </a>
                                <h3 class="card-title">${idArticleSelectionne.name}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h5><strong>${idArticleSelectionne.description}</strong>
                            </h5>
                            <BR/>
                            <h5>${idArticleSelectionne._id}
                            </h5>
                            <BR/>
                            <h3><strong>${idArticleSelectionne.price / 100} € </strong>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div class="card">
                    </div>
                </div>`;

// Injecter la code HTML dans produit.html
articleSelectionne1.innerHTML+=prototype1;

// Sélectionner l'identifiant où je vais mettre le code HTML pour l'option couleur et le bouton
let articleSelectionne2 = document.querySelector("#bloc-articles2");
console.log(articleSelectionne2);

// Code HTML pour l'affichage de l'article sélectionné
let prototype2 = ` <div class="col-12 col-lg-3">
                        <div class="card">
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="card h-100">
                            <div class="card-body text-center">
                                <h5>Je personnalise sa couleur
                                </h5>
                                <form>
                                    <select id="couleurs" size="1">
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="card h-100">
                            <div id="btn-envoyer" class="card-body text-center">
                                <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Je mets dans mon panier</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <div class="card">
                        </div>
                    </div>`;


// Injecter la code HTML dans produit.html
articleSelectionne2.innerHTML+=prototype2;

// Adapter la fenêtre défilante aux nombre d'options de l'article
let nombreOptions = idArticleSelectionne.colors;
let structureOptions = [];
console.log(nombreOptions);
// Faire la boucle for pour afficher le nombre d'options
for (let i = 0; i < nombreOptions.length; i++) {
     structureOptions = structureOptions +
     '<option> ' + nombreOptions[i] + ' </option>';
}
// Afficher la structure des options
console.log(structureOptions);
// Sélectionner l'identifiant où je vais mettre le code HTML pour les options couleurs
let articleSelectionne3 = document.querySelector("#couleurs");
console.log(articleSelectionne3);
// Injecter la code HTML pour le choix des options
articleSelectionne3.innerHTML = structureOptions;

// ------------------ Gestion du panier ----------------------------------
// Ecouter le click pour mettre dans le panier
let mettreDansLePanier = document.querySelector("#btn-envoyer");
// console.log(mettreDansLePanier);
// Ecouter le click du bouton pour mettre l'article sélectionné dans le panier
mettreDansLePanier.addEventListener("click", (event)=>{
event.preventDefault();

// Récupérer la couleur choisie
let couleurChoisie = document.querySelector("#couleurs");
// Mettre la couleur choisie dans une variable
let choixCouleur = couleurChoisie.value;
console.log(choixCouleur);

// Récupérer les données de l'article à mettre dans le panier
let articlePanier = {
    modele: idArticleSelectionne.name,
    reference: idArticleSelectionne._id,
    couleur: choixCouleur,
    quantit: 1,
    prix: idArticleSelectionne.price / 100
}
// Afficher les données de l'article sélectionné
console.log(articlePanier);

// ------------------------------Local Storage--------------------------------------
// Stocker les données de l'article dans le localstorage avec JSON.parse
let articleStockeDansLocalstorage = JSON.parse(localStorage.getItem("article"));

// Créer un popup de confirmation
let popupConfirmation = () =>{
    if(window.confirm("'idArticleSelectionne.name' option: 'choixCouleur' a bien été mis dans le panier Consulter le panier OK ou revenir à laccueil ANNULER" )) {
    window.location.href = "panier.html";
    }
    else {
        window.location.href = "index.html";
    }
}

// S'il y a des artiles stockés dans LocalStorageyy
if(articleStockeDansLocalstorage){
    articleStockeDansLocalstorage.push(articlePanier);
    localStorage.setItem("article", JSON.stringify(articleStockeDansLocalstorage))
}
// Sinon
else{
    articleStockeDansLocalstorage = [];
    articleStockeDansLocalstorage.push(articlePanier);
    localStorage.setItem("article", JSON.stringify(articleStockeDansLocalstorage));
    console.log(articleStockeDansLocalstorage);
}
console.log(articleStockeDansLocalstorage);

})

});

