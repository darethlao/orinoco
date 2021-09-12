// Aller chercher la base articles dans l'API Teddies
function recupererTousArticles() {
  fetch("http://localhost:3000/api/teddies/")
    .then(function(baseArticles) {
      return baseArticles.json();
    })
    .then(function(baseArticles) {
      // Afficher la base articles
      console.log(baseArticles);
      // Renvoyer le nom et l'image de chaque article
      let container = document.getElementById("bloc-articles");
      console.log(container.childElementCount);
      baseArticles.forEach((articles) => {
        let prototype = '<div class="col-12 col-lg-4">\
            <div class="text-center" style="background:rgb(243, 233, 241); border-color:rgb(243, 233, 241)">\
                <a class="articles" href="produit.html?id=' + articles._id +'">\
                    <img src="' + articles.imageUrl + '" height="200" >\
                </a>\
                <h3 class="card-title">' + articles.name + '</h3>\
            </div>\
      </div>';
      container.innerHTML+=prototype;
      console.log(container.childElementCount)
    })
  });

}
recupererTousArticles();