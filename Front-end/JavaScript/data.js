


    function DisplayNumber(){ 
        let CartNumber = JSON.parse(localStorage.getItem("NumberOfArticles"));
        let LoctoDisplay = document.getElementById("ArtNumber");
        
        
        if(CartNumber == null){
            console.log( 'panier vide')
        }
        else{
            LoctoDisplay.innerText = CartNumber
        }
        }