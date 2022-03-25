
const APIURL="https://www.themealdb.com/api/json/v1/1/random.php"

const SEARCHAPIID= "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
const SEARCHAPINOM="https://www.themealdb.com/api/json/v1/1/search.php?s="

const container=document.getElementById('container');
const form =document.getElementById('form');
const input= document.querySelector('input');
const loupe =document.querySelector('.icon-search')



function getRecette(url) {
    fetch(url)
        .then(res=> res.json())
        .then(data=>{
        creerRecette(data.meals);
        console.log(data.meals[0]);
        const generateurRecette=document.getElementById('generateur');
        generateurRecette.addEventListener('click',function(){
        location.reload(true);
    })
    })   
}
getRecette(APIURL);

function creerRecette(data) {
    data.forEach(recette => {
    const {strMeal,strMealThumb,strInstructions,strIngredient}=recette;
    const modal=document.createElement('div');
    modal.className='modal';
    modal.innerHTML = `
        <div class="partie-recherche">
            <form id="form" action="">
                <input type="text" name="search" id="search">
                <label for="search"><i class="fa-solid fa-magnifying-glass icon-search"></i></label>
            </form>

        </div>

        <div class="entete">
            <h1 class="titre">Mes Recettes Favorites</h1>
            <div class="logo">
                <img class="img-entete" src="images/image1.jpeg" alt="">
                <h2>Pancakes</h2>
            </div>
        </div>

        <div class="recette-generee">

        <div class="cards">
                <h2 id="generateur">Generer recette</h2>
                <img  class="img-cards" src="${strMealThumb}" alt="">
            
                <div class="bas-cards">
                    <p>${strMeal}</p>
                    <i class="fa-solid fa-heart icon-coeur"></i>
                </div>
            </div>

        </div>
        
    `
    container.appendChild(modal);
    // #################### Popup##########################
    const iconCoeur=document.querySelector('.icon-coeur');
    iconCoeur.addEventListener('click',function(){
        const containerPopup=document.getElementById('container-popup')
        containerPopup.innerHTML='';
        const popup= document.createElement('div');
        const hautPopup= document.createElement('div');
        const titlePopup= document.createElement('div');
        const titleH1= document.createElement('h1');
        const iconClose=document.createElement('i');
        const image= document.createElement('img');
        const detailsPopup= document.createElement('div');
        const ingredients= document.createElement('div');
        const p=document.createElement('p');
        const titleH2= document.createElement('h2');

        const listesIngredients = document.createElement('ul');
        for (let i = 1; i <=20 ; i++) {
            if (strIngredient+i!==null && strIngredient+i!=="") {
               const li=document.createElement('li');
               li.innerText=`${strIngredient}`+i;
               listesIngredients.appendChild(li);
            }
            
        }
        popup.className='popup';
        hautPopup.className='haut-popup'
        titlePopup.id='title';
        titleH1.className='titre';
        titleH1.innerText=`${strMeal}`;
        iconClose.id='close';
        iconClose.className="fa-solid fa-xmark";
        image.src=`${strMealThumb}`;
        detailsPopup.className='details-recette';
        p.className='details';
        p.innerText=`${strInstructions}`;
        ingredients.className='ingredients';

        titlePopup.append(titleH1,iconClose);
        hautPopup.append(titlePopup,image);
        ingredients.append(titleH2,listesIngredients);
        detailsPopup.append(p,ingredients)
        popup.append(hautPopup,detailsPopup);

        container.classList.add('cacher-container');
        containerPopup.appendChild(popup);

        iconClose.addEventListener('click',function(){
            containerPopup.classList.add('close-containerPopup');
            container.className='container';
        })

    })

}
)}

// loupe.addEventListener('input',()=>{
    // const valueInput=input.value;
    //     getRecette(SEARCHAPINOM+valueInput);

    // fetch(SEARCHAPINOM+valueInput).then(recett=>{
    //     recett.json().then(resultat=>{
    //         resultat.meals.forEach(els=>{
    //             source = els.strMealThumb
    //             titre = els.strMeal
    //             newDiv(source,titre)
    //             container.appendChild(newDiv(source,titre))
    //         });
    //     })
    
    // })

    // alert(valueInput);

// })




