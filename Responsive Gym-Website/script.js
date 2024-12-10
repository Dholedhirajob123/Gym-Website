let menu = document.querySelector('#menu-icon');
let navbar = document.querySelectorAll('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll =() => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typeing Text Code

const  typed = new Typed('.multiple-text', {
    strings: ['Physcial Fitness','Weight Gain','Strengths Training','fat Lose','Weight Lifting','Running'],
    typeSpeed: 60,
    backspeed:60,
    backDelay:1000,
    loop:true,
  });

