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
                    <button class="btn-supprimer fa fa-trash-o" id-article-supprime="${articleStockeDansLocalstorage[j].id}"></button>
                </div>
            </div>
        `;
        }
        // Injecter le code HTML dans panier.html
        articleSelectionne3.innerHTML=structureArticlesDansPanier;
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
        el => el.id !== id_a_supprimer);
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
    let formulaireCompletee = document.querySelector("#formulaire");
    let sctructureFormulaire =`<!-- bouton de confirmation de commande-->
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
            <label for="nom">Nom:</label>
            <input type="text" id="lastname" name="nom" placeholder="Mon nom" maxlength="50" required>
            <br/>
            <label for="prenom">Prénom:</label>
            <input type="text" id="firstname" name="prenom" placeholder="Mon prénom" maxlength="50" required>
            <br/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Mon email" maxlength="50" required>
            <br/>
            <label for="adresse">Adresse:</label>
            <input type="text" id="address" name="adresse" placeholder="Mon adresse" maxlength="50" required>
            <br/>
            <label for="ville">Ville:</label>
            <input type="text" id="city" name="ville" placeholder="Ma ville" maxlength="50" required>
            <br/>
            <button class="envoyerFormulaire btn btn-primary" type="submit" name="envoyerFormulaire">Je confirme ma commande
            </button>
        </form>
        <p style="color: red;" id="erreur"></p>
    </div>
</div>
`;
// Injecter le code HTML dans panier.html
formulaireCompletee.innerHTML=sctructureFormulaire;
console.log(formulaireCompletee);

// Ecouter le click du bouton "Je confirme ma commande"
let btnEnvoyerFormulaire = document.querySelector(".envoyerFormulaire");
btnEnvoyerFormulaire.addEventListener("click", (e)=>{
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    let valeursFormulaire = {
        lastname: document.querySelector("#lastname").value,
        firstname: document.querySelector("#firstname").value,
        email: document.querySelector("#email").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value
    }

    // Mettre les valeurs du formulaire dans le local storage
    localStorage.setItem("valeursFormulaire", JSON.stringify(valeursFormulaire));
    localStorage.setItem("calculPrixTotal", JSON.stringify(calculPrixTotal));

    // Récupérer les id des produits du panier
    let articles = [];
    for (idListe of articleStockeDansLocalstorage) {
        articles.push(idListe.id);
        console.log(articles);
    } 

    // Mettre les valeurs du formulaire et les produits sélectionnés dans un objet à envoyer dans le serveur
    let aEnvoyer = {
        contact: {
            firstName: valeursFormulaire.firstname,
            lastName: valeursFormulaire.lastname,
            address: valeursFormulaire.address,
            city: valeursFormulaire.city,
            email: valeursFormulaire.email,
        },
        products: articles,
        calculPrixTotal
    }

    console.log(aEnvoyer);

    // Envoyer l'objet vers le serveur
    const promise1 = fetch("http://localhost:3000/api/teddies/order",{
        method: "POST",
        body: JSON.stringify(aEnvoyer),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    console.log(promise1);

    // Voir le résultat du serveur dans la console
    promise1.then(async(response)=>{
        // Gérer les erreurs si la promesse n'est pas non résolue
        try{
            const contenu = await response.json();
            console.log(contenu);
            if(response.ok){
                console.log(`Résultat de response.ok : ${response.ok}`);
                //Récupération de l'id de la response du serveur
                console.log(contenu.orderId);
                // Mettre l'id dans le local storage
                localStorage.setItem("responseId", contenu.orderId)
            } else {
                console.log(`Réponse du serveur : ${response.status}`);
                alert(`Problème avec le serveur : erreur ${response.status}`)
            };
        }catch(e){
            articleStockeDansLocalstorage.log("Erreur qui vient du cacth() ");
            console.log(e);
            alert(`Erreur qui vient du cacth() $(e)`);
        }
    })

    let promise2 = fetch("http://localhost:3000/api/teddies/order");
    promise2.then((response) => response.json())
                .then((data) => {
                    localStorage.setItem("order", JSON.stringify(data));
                    // Aller vers la page confirmation.html
                    document.location.href = "confirmation.html";
                })
                .catch((erreur) => console.log("erreur : " + erreur));

})
