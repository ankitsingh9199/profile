'use strict';

//Toggle Function

const aksToggleFunc = (function() {
    return function(aks) {
        aks.classList.toggle('active');
    };
})();


// Header Sticky & Go-Top

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

let lastScrollY = 0;

const updateScroll = () => {
    if (lastScrollY >= 10) {
        header.classList.add('active');
        goTopBtn.classList.add('active');
    } else {
        header.classList.remove('active');
        goTopBtn.classList.remove('active');
    }
};

const onScroll = () => {
    lastScrollY = window.scrollY;
    requestAnimationFrame(updateScroll);
};

window.addEventListener('scroll', onScroll);


// Mobile Menu

const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navbar = document.querySelector('[data-navbar]');

navToggleBtn.addEventListener('click', function() { 
    aksToggleFunc(navToggleBtn);
    aksToggleFunc(navbar);
    aksToggleFunc(document.body);
})

// Skills Toggling Button

const toggleBtnBox = document.querySelector('[data-toggle-box]');
const toggleBtns = document.querySelectorAll('[data-toggle-btn]');
const skillsBox = document.querySelector('[data-skills-box]');

for(let i = 0; i < toggleBtns.length; i++){
    toggleBtns[i].addEventListener('click', function(){
        aksToggleFunc(toggleBtnBox);

        for(let i = 0; i < toggleBtns.length; i++) { aksToggleFunc(toggleBtns[i]); }
        aksToggleFunc(skillsBox);
    });
}

// Dark & Light Theme Toggle

const themeToggleBtn = document.querySelector('[data-theme-btn]');

themeToggleBtn.addEventListener('click', function(){
    aksToggleFunc(themeToggleBtn);

    if(themeToggleBtn.classList.contains('active')){
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');

        localStorage.setItem('theme', 'light-theme');
    }else{
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');

        localStorage.setItem('theme', 'dark-theme');
    }
})

//Applying Theme kept in Local Storage 

if(localStorage.getItem('theme') === 'light-theme'){
    themeToggleBtn.classList.add('active');
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
}else{
    themeToggleBtn.classList.remove('active');
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
}


   // Set the current year
   document.getElementById("year").textContent = new Date().getFullYear();

   // Function to update the time
   function updateTime() {
       const now = new Date();
       const hours = now.getHours().toString().padStart(2, '0');
       const minutes = now.getMinutes().toString().padStart(2, '0');
       const seconds = now.getSeconds().toString().padStart(2, '0');
       const timeString = `${hours}:${minutes}:${seconds}`;
       
       document.getElementById("time").textContent = timeString;
   }

   // Update the time every second
   setInterval(updateTime, 1000);

   // Initialize time immediately
   updateTime();
   



//    water ripples



const titles = ["Frontend Developer", "Backend Developer", "Software Engineer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = titles[index];
    const displayText = isDeleting 
        ? currentText.substring(0, charIndex--) 
        : currentText.substring(0, charIndex++);

    document.getElementById("dynamicTitle").textContent = displayText;

    let speed = isDeleting ? 50 : 100; // Typing speed

    if (!isDeleting && charIndex === currentText.length + 1) {
        speed = 1500; // Pause after full text
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % titles.length;
        speed = 500; // Pause before typing next word
    }

    setTimeout(typeEffect, speed);
}

typeEffect();



const greetings = [
    "Hello!",         // English
    "नमस्ते!",        // Hindi
    "Hola!",          // Spanish
    "Bonjour!",       // French
    "Hallo!",         // German
    "Ciao!",          // Italian
    "こんにちは!",     // Japanese
    "你好!",          // Chinese
    "Привет!",       // Russian
    "안녕하세요!"      // Korean
  ];

  let ankit = 0;
  
  function changeGreeting() {
    document.getElementById("helloText").textContent = greetings[ankit];
    ankit = (ankit + 1) % greetings.length; 
  }
  
  setInterval(changeGreeting, 1000); 