const carrousel=document.querySelector('.carrousel')
const gimage=document.getElementById('gimage');
const photo=document.getElementById("photo");
const btnDroite=document.getElementById("btn-droite");
const btnGauche=document.getElementById("btn-gauche");
var getImages = [
    'images/city.jpeg',
    'images/city1.jpg',
    'images/city2.jpg',
    'images/city3.jpg',
    'images/city4.jpg',
    'images/city7.jpg',
    'images/city8.jpeg'
];

var i = 0;
// var time = 5000;

function changerImages(){
    // body.style.backgroundImage=getImages[i] ;
    photo.src = getImages[i];
    if (i<getImages.length-1) {
         i++
     }else{
         i = 0;
     }

    setTimeout("changerImages()",3000);
}
changerImages();

btnGauche.addEventListener('click',function () {
    if (i>0)
        i++;
        changerImages();
    
})
btnDroite.addEventListener('click',function () {
    if (i<0)
        i++;
        changerImages();
})
// carrousel.addEventListener('mouseover',()=>carrousel.classList.toggle('carrousel-hover'))



