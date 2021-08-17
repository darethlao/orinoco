        // Récupérerl'élément sur lequel on veut détecter le click
        const elt = document.getElementById('bloc-articles');

        // Ecouter l'évènement click
        document.getElementById('articles').addEventListener('click', function() {
            elt.innerHTML = "C'est cliqué !";
        });

// Aller chercher la base articles dans l'API Teddies
fetch("http://localhost:3000/api/teddies/")
    .then(function(baseArticles) {
        return baseArticles.json();
    })
    .then(function(baseArticles) {

        // Afficher la base articles
        console.log(baseArticles);

        // Renvoyer le nom et l'image de l'article sélectionné dans la page d'accueil
        let container = document.getElementById("bloc-article");
        baseArticles.forEach((articles) => {
            let prototype = '<div class="col-12 col-lg-4">\
            <div class="card">\
                <div class="card-body text-center" style="background:rgb(243, 233, 241);">\
                    <a class="articles" href="produit.html">\
                        <img src="' + articles.imageUrl + '" height="200" >\
                    </a>\
                    <h3 class="card-title">' + articles.name + '</h3>\
                </div>\
            </div>\
    </div>';
    container.innerHTML+=prototype;
    })
});