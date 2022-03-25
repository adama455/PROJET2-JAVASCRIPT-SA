const allBtn= document.querySelectorAll("button");
const conteneur=document.querySelector('.conteneurMessage');
allBtn.forEach(button => {  
    button.addEventListener('click',function(){
    
        switch (button.innerText) {
            case 'Notification Success':
               message(divMessage=document.createElement('div'));
               divMessage.className ='btn1';
                divMessage.innerText=('Mon Projet 1')
                break;
            case 'Notification Danger':
                message(divMessage=document.createElement('div'));
                divMessage.className='btn2';
                divMessage.innerText=('Mon Projet 2')

                
            break;
            case 'Notification Warning':
               message(divMessage=document.createElement('div'));
               divMessage.className='btn3';
               divMessage.innerText=('Mon Projet 3')

            break;
            case 'Notification Info':
                message(divMessage=document.createElement('div'));
                divMessage.className='btn4';
                divMessage.innerText=('Mon Projet 4')
                
                break;
        }
        
    })
   
});
function message(divMessage=document.createElement('div')){
    // divMessage.innerText=('Mon Projet ');
    divMessage.id='message';
    conteneur.appendChild(divMessage);
    setTimeout(() => {
        divMessage.remove(divMessage);
    }, 1000);
   
}
