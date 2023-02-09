let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

for (let i = 0; i < section.length; i++) {
    section[i].onclick = () =>{
        console.log('abc');
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }  
}

window.onscroll=() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}