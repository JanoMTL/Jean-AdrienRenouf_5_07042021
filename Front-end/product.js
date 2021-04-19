




main ()
async function main(){
    const articles = await getArticles()
    displayArticles(articles)
    }   



function getArticles() {
    return fetch(" http://localhost:3000/api/cameras")
        .then(function(httpBodyResponse){
            return httpBodyResponse.json()

        })
        .then(function(articles){
            return articles
        })
        .catch(function(error){
            alert(error)
        })
    
}



function displayArticles(article){
   const templateElement = document.getElementById("templateArticle")
   const cloneElement = document.importNode(templateElement.content, true)

   
   cloneElement.getElementById("camera__title").textContent = article.name
   cloneElement.getElementById("camera__img").src = article.imageUrl
   cloneElement.getElementById("camera__price").textContent = 'À partir de ' + article.price/100 + ' €'
   document.getElementById('main').appendChild(cloneElement)  
}

