const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main=document.getElementById('main');
const form=document.getElementById('form');
const input=document.querySelector('input');

function getMovie(url) {
    fetch(url).then(res=> res.json()).then(data=>{
        showMovies(data.results)
    })
    
}
getMovie(APIURL);

function showMovies(data){
    // main.innerHTML='';
    data.forEach(film => {
        const {title,poster_path,vote_average,overview}=film;
        const container=document.createElement('div');
        container.classList.add('container');
        container.innerHTML=`
        <img src="${IMGPATH+poster_path}" alt="${title}">
        
        <div class="container-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>

        `
        
        

        main.appendChild(container);
    });

}
function getColor(vote){
    if (vote>=8) {
        return 'green';
    }else if (vote>=5) {
        return 'orange';
    }else{
        return 'red';
    }

}
form.addEventListener('input',e=>{
    e.preventDefault();
    const valueInput= input.value;

    if (valueInput)  
        getMovie(SEARCHAPI+'/'+valueInput);
    else  
        getMovie(APIURL);
    
})
let page=1;
    window.addEventListener('scroll',()=>{
    const {scrollTop,scrollHeight,clientHeight} =document.documentElement;
    // var APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    if (scrollTop+clientHeight>=scrollHeight - 5) {
    var APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+page++;
    
    getMovie(APIURL);
        
    }
});







