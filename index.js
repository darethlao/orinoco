// fetch("http://localhost:3000/api/teddies/")
  // .then(function(data) {
  //   return data.json();
  // })
  // .then(function(data) {
  //   console.log(data);
  //   var container = document.getElementById("bloc-articles");
  //   data.forEach(ours => {
  //       console.log(ours);
  //       var articleContainer = document.createElement("div");         
  //       var articleContent = document.createTextNode(ours.name);
  //       container.appendChild(articleContainer);
  //       articleContainer.appendChild(articleContent);
  // })
// });

// Aller chercher la base articles dans l'API Teddies
function recupererTousArticles(){
  fetch("http://localhost:3000/api/teddies/")
    .then(function(baseArticles) {
      return baseArticles.json();
    })
    .then(function(baseArticles) {

      // Afficher la base articles
      console.log(baseArticles);
      // Renvoyer le nom et l'image de chaque article
      let container = document.getElementById("bloc-articles");
      console.log(container.childElementCount)
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

        // Récupérer les images des articles
          // console.log(imageArticles);
          // let imageArticleContainer2 = document.createElement("a");
          // imageArticleContainer2.href=imageArticles._id;
          // let imageArticleContent2 = document.createTextNode(imageArticles.imageUrl); 
          // container.appendChild(imageArticleContainer2);
          // imageArticleContainer2.appendChild(imageArticleContent2);
          // // Récupérer les noms des articles
          // let imageArticleContainer = document.createElement("h4");
          // let imageArticleContent = document.createTextNode(imageArticles.name); 
          // container.appendChild(imageArticleContainer);
          // imageArticleContainer.appendChild(imageArticleContent);
          // // Récupérer les noms des articles
          // let img = document.createElement("img");
          // img.src = imageArticles.imageUrl;
          // container.appendChild(img);
    })
  });

}

recupererTousArticles()



