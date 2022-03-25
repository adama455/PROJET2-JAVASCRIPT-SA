const container = document.getElementById('container');
const menu = document.getElementById('menu-aside');
const navMenu = document.getElementById('nav-menu');
const iconMenu=document.getElementsByClassName('icon-menu')[0];
const image=document.getElementsByClassName('image');
const textImage1=document.getElementById('text-img1');
const textImage2=document.getElementById('text-img2');
const recherche=document.querySelector('.recherche');
const nav=document.querySelector('nav');
const utilisateur=document.getElementsByClassName('utilisateur');


iconMenu.addEventListener('click',function(){
    menu.classList.toggle('menu-aside-plier');
    textImage1.classList.toggle('text-mage1');
    textImage2.classList.toggle('text-mage2');
    image[0].classList.toggle('image-plier');
    image[1].classList.toggle('image-plier');
    recherche.classList.toggle('recherche-plier');
    utilisateur[0].classList.toggle('users');
    iconMenu.classList.toggle('iconmenu-plier');
});

const tableMenu=[
    {
        iclass1:"nav-icon fas fa-tachometer-alt",
        texte:"dashboard",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'right fas fa-angle-left',
        tabsousMenu:[
            {
                iclass1:"far fa-circle nav-icon",
                texte:"dashboard v1"
                
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"dashboard v2"
                 
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"dashboard v3"
                
                
            }
        ]
    },
    {
        iclass1:"nav-icon fas fa-th", 
        texte:"Widgets",
        texteBadge:"New",
        BadgeColor:"color-red",
        tabsousMenu:[
            {
                iclass1:"",
                texte:""
            }
        ]
    },
    {
        iclass1:"nav-icon fas fa-tachometer-alt",
        texte:"Layout Options",
        texteBadge:"6",
        BadgeColor:"color-blue",
        iclass2:'right fas fa-angle-left',
        tabsousMenu:[
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Top Navigation",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Top Navigation + Sidebar",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Boxed",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Fixed Sidebar",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Fixed Sidebar + Custom",
            },
            
        ]
    },

    {
        iclass1:"nav-icon fas fa-chart-pie",
        texte:"Charts",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'right fas fa-angle-left',
        tabsousMenu:[
            {
                iclass1:"far fa-circle nav-icon",
                texte:"ChartKJS",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Flot",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Inline", 
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"uPlot",
            }
        ]
        
    },
    {
        iclass1:"nav-icon fas fa-tree",
        texte:"UI Elements",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'right fas fa-angle-left',
        tabsousMenu:[
            {
                iclass1:"far fa-circle nav-icon",
                texte:"General",

            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Icons",
            },

            {
                iclass1:"far fa-circle nav-icon",
                texte:"Buttons",

            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Sliders",

            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Modals & Alerts",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Navbar & Tabs",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Timeline",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Ribbons",
            }
            
        ]
    },
   {
        iclass1:"nav-icon fas fa-edit",
        texte:"Forms",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'right fas fa-angle-left',
        tabsousMenu:[
            {
                iclass1:"far fa-circle nav-icon",
                texte:"General Elements",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Advanced Element",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Editor",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Validation",  
            }
        ]
    },
    {
        iclass1:"nav-icon fas fa-copy",
        texte:"Tables",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'right fas fa-angle-left',
        tabsousMenu:[
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Simple Talbles",

            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"DataTables",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"jsGrid",
            },
            
        ]
    },
    {
        iclass1:"",
        texte:"EXEMPLE",
        texteBadge:"",
        BadgeColor:"exemple",
        iclass2:'',
        tabsousMenu:[
            {
                iclass1:"",
                texte:"",
            },
        ]
    },
    // {
    //     iclass1:"nav-icon far fa-calendar-alt",
    //     texteBadge:"2",
    //     BadgeColor:"color-blue", 
    //     iclass2:'', 
    //     tabsousMenu:[
    //         {
    //             iclass1:"",
    //             texte:"",
    //         },
    //     ]
    // },   
    {
        iclass1:"nav-icon far fa-calendar-alt",
        texte:"Calendar",
        texteBadge:"2",
        BadgeColor:"color-blue", 
        iclass2:'',
        tabsousMenu:[
            {
                iclass1:"",
                texte:"",
            },
        ]
    },
    {
        iclass1:"nav-icon far fa-image",
        texte:"Gallery",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'',
        tabsousMenu:[
            {
                iclass1:"",
                texte:"",
            },
        ]
    },
    {
        iclass1:"nav-icon far fa-envelope",
        texte:"Mailbox",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'right fas fa-angle-left',
        tabsousMenu:[
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Inbox",
                
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Compose",
                
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Read",
                
            },
            
        ]
    },
    {
        iclass1:"nav-icon fas fa-book",
        texte:"Pages",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'right fas fa-angle-left',
        tabsousMenu:[
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Invoice",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Profile",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"E-commerce",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Projects",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Project Add",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Project Edit",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Projects Detail",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Contacts",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"FAQ",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Contact us",
            }
            
        ]
    },
    {
        iclass1:"nav-icon far fa-plus-square",
        texte:"Extras",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'right fas fa-angle-left',
        tabsousMenu:[
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Login & Register v1",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Login & Register v2",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Lockscreen",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Legacy User Menu",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Language Menu",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Error 404",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Error 500",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Pace",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Blank Page",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Starter Page",
            }
        ]
    },
    {
        iclass1:"nav-icon fas fa-search",
        texte:"Search",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'right fas fa-angle-left',
        tabsousMenu:[
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Simple Search",
            },
            {
                iclass1:"far fa-circle nav-icon",
                texte:"Enhanced",
            },
        ]
    },
    {
        iclass1:"",
        texte:"MISCELLANEOUS",
        texteBadge:"",
        BadgeColor:"exemple",
        iclass2:'',
        tabsousMenu:[
            {
                iclass1:"",
                texte:"",
            },
        ]
    },
    {
        iclass1:"nav-icon fas fa-columns",
        texte:"Canban Board",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'',
        tabsousMenu:[
            {
                iclass1:"",
                texte:"",
            },
        ]
    },
    {
        iclass1:"nav-icon fas fa-ellipsis-h",
        texte:"Tabbed IFrame Plugin",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'',
        tabsousMenu:[
            {
                iclass1:"",
                texte:"",
            },
        ]
    },
    {
        iclass1:"nav-icon fas fa-file",
        texte:"Documentation",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'',
        tabsousMenu:[
            {
                iclass1:"",
                texte:"",
            },
        ]
    },
    {
        iclass1:"",
        texte:"MULTI LEVEL EXAMPLE",
        texteBadge:"",
        BadgeColor:"",
        iclass2:'',
        tabsousMenu:[
            {
                iclass1:"",
                texte:"",
            },
        ]
    } 
]

function menuBadge() {
    const divPart=document.createElement('div'); 

    const div1= document.createElement('div');    
        const parIcone2Badge = document.createElement('div'); 
        const divIcon1= document.createElement('i');  

    const div2= document.createElement('ul'); 
    const textP =document.createElement('p');
    const badge=document.createElement('span');
    const icon2 = document.createElement('i');
        parIcone2Badge.append(textP,badge,icon2);
        div1.append(divIcon1,parIcone2Badge);
        divPart.append(div1,div2);

        divPart.className='dashboard';
        div1.className="elements";
        divIcon1.className='icon-gauche';
        parIcone2Badge.className='p-i-badge';
        textP.className='para';
        icon2.className='icon-droite';
    div1.addEventListener('click',function(){
        div2.classList.toggle('toogle');
        icon2.classList.toggle('rotation');
    })
    iconMenu.addEventListener('click',function(){
        parIcone2Badge.classList.toggle('cacher-menu')
        divIcon1.classList.toggle('icon-pilier');

    });
   
    div1.addEventListener('mouseover',()=>divPart.classList.toggle("dashboard-over"));
    div1.addEventListener('click',()=>div1.classList.toggle("dashboard-active"));
    // menu.addEventListener('mouseover',function(){
    //     menu.className='';
    //     parIcone2Badge.className='';
    //     textImage1.className='';
    //     textImage2.className='';
    //     image[0].className='';
    //     image[1].className='';
    //     recherche.className='';
    //     utilisateur[0].className='';
    //     iconMenu.className='';
    //     // divIcon1.className='';
    // })
    return divPart;
}


function ajoutMenu(parent) {
    for (let i = 0; i < tableMenu.length; i++) {
        parent.appendChild(menuBadge());
        parent.children[i].firstChild.firstChild.className = tableMenu[i].iclass1;
        parent.children[i].firstChild.lastChild.firstChild.innerText = tableMenu[i].texte;
        parent.children[i].firstChild.lastChild.children[1].innerText = tableMenu[i].texteBadge;
        parent.children[i].firstChild.lastChild.children[1].className= tableMenu[i].BadgeColor;
        parent.children[i].firstChild.lastChild.lastChild.className = tableMenu[i].iclass2;
        for(let j = 0; j < tableMenu[i].tabsousMenu.length; j++){
            parent.children[i].lastChild.appendChild(menuBadge());
            parent.children[i].lastChild.children[j].firstChild.firstChild.className=tableMenu[i].tabsousMenu[j].iclass1;
            parent.children[i].lastChild.children[j].firstChild.lastChild.firstChild.innerText=tableMenu[i].tabsousMenu[j].texte;
        }
    }
}
ajoutMenu(navMenu);
navMenu.children[0].className='dashboard-bgcolor';