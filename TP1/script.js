const allBtn= document.querySelectorAll("button");
const conteneur=document.querySelector('.conteneurMessage');
allBtn.forEach(button => {  
    button.addEventListener('click',function(){
    
        switch (button.innerText) {
            case 'Notification Success':
               message(divMessage=document.createElement('div'));
                divMessage.style.backgroundColor='#28a745';
                divMessage.innerText=('Mon Projet 1')
                break;
            case 'Notification Danger':
                message(divMessage=document.createElement('div'));
                divMessage.style.backgroundColor='#dc3545';
                divMessage.innerText=('Mon Projet 2')

                
            break;
            case 'Notification Warning':
               message(divMessage=document.createElement('div'));
               divMessage.style.backgroundColor='#ffc107';
               divMessage.innerText=('Mon Projet 3')

            break;
            case 'Notification Info':
                message(divMessage=document.createElement('div'));
                divMessage.style.backgroundColor='#17a2b8 ';
                divMessage.innerText=('Mon Projet 4')
                
                break;
        }
        
    })
   
});
function message(divMessage=document.createElement('div')){
    // divMessage.innerText=('Mon Projet ');
    divMessage.setAttribute('class','message');
    conteneur.appendChild(divMessage);
    setTimeout(() => {
        divMessage.remove(divMessage);
    }, 1000);
   
}
